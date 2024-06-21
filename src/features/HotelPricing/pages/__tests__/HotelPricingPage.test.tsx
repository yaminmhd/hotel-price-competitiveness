import { fireEvent } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import userEvent from "@testing-library/user-event";
import HotelPricingPage from "../HotelPricingPage";
import { renderWithClient } from "./utils";
import { server } from "../../../../mocks/server";

describe("<HotelPricingPage/>", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("should render hotels list successfully with default USD price info", async () => {
    const result = renderWithClient(<HotelPricingPage />);

    expect(await result.findAllByRole("listitem")).toHaveLength(6);
    expect(await result.findByTestId("currency-selector")).toBeInTheDocument();
  });

  it("should render hotel with no price info at the bottom of list", async () => {
    const result = renderWithClient(<HotelPricingPage />);

    const selectElement = await result.findByLabelText("Select Currency:");

    fireEvent.change(selectElement, {
      target: { value: "CNY" },
    });

    const allHotels = await result.findAllByRole("listitem");
    const lastHotelInList = allHotels.pop();

    expect(lastHotelInList?.textContent).toContain("Rates unavailable");
    expect(await result.findByText("Rates unavailable")).toBeInTheDocument();
  });

  it("should retain price info currency when user selects another currency SGD and refreshes browser", async () => {
    const result = renderWithClient(<HotelPricingPage />);
    expect(
      await result.findByRole("heading", { name: "Price: USD 840" })
    ).toBeInTheDocument();

    const selectElement = await result.findByLabelText("Select Currency:");
    fireEvent.change(selectElement, { target: { value: "SGD" } });

    const user = userEvent.setup();
    await user.keyboard("[MetaLeft][KeyR]");
    expect(
      await result.queryByRole("heading", { name: "Price: USD 840" })
    ).not.toBeInTheDocument();
    expect(
      await result.findByRole("heading", { name: "Price: SGD 160" })
    ).toBeInTheDocument();
  });

  it("should render loading state", async () => {
    const result = renderWithClient(<HotelPricingPage />);
    expect(await result.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render generic fallback error state page", async () => {
    console.error = vi.fn();
    server.use(
      http.get("*", () => {
        return new HttpResponse("error", { status: 500 });
      })
    );
    const result = renderWithClient(<HotelPricingPage />);

    expect(await result.findByText(`Something went wrong`)).toBeInTheDocument();
  });
});
