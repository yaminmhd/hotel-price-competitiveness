import { fireEvent } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import userEvent from "@testing-library/user-event";
import HotelListing from "../HotelListing";
import { renderWithClient } from "./utils";
import { server } from "../../../../mocks/server";

describe("<HotelListing/>", () => {
  it("should render hotels list successfully with default USD price info", async () => {
    const result = renderWithClient(<HotelListing />);

    expect(await result.findAllByRole("listitem")).toHaveLength(6);
    expect(await result.findByTestId("currency-selector")).toBeInTheDocument();
  });

  it("should render new hotel price info when user selects another currency SGD and sets into localstorage", async () => {
    const result = renderWithClient(<HotelListing />);
    const selectElement = await result.findByLabelText("Select Currency:");

    fireEvent.change(selectElement, {
      target: { value: "SGD" },
    });

    expect(
      await result.findByRole("heading", { name: "Our Price: SGD 164.00" })
    ).toBeInTheDocument();
    expect(await result.findByText("SGD")).toBeInTheDocument();
    expect(await result.findAllByRole("listitem")).toHaveLength(6);
    expect(await result.findByTestId("currency-selector")).toBeInTheDocument();
  });

  it("should retain price info currency when user refreshes browser", async () => {
    const result = renderWithClient(<HotelListing />);
    expect(await result.findByText("USD")).toBeInTheDocument();

    const selectElement = await result.findByLabelText("Select Currency:");
    fireEvent.change(selectElement, { target: { value: "SGD" } });

    const user = userEvent.setup();
    await user.keyboard("[MetaLeft][KeyR]");
    expect(await result.findByText("SGD")).toBeInTheDocument();
  });

  it("should render loading state", async () => {
    const result = renderWithClient(<HotelListing />);
    expect(await result.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state", async () => {
    server.use(
      http.get("*", () => {
        return new HttpResponse("Something went wrong", { status: 500 });
      })
    );
    const result = renderWithClient(<HotelListing />);

    expect(
      await result.findByText(`["hotels"] data is undefined`)
    ).toBeInTheDocument();
    expect(
      await result.findByText(`["prices","SGD"] data is undefined`)
    ).toBeInTheDocument();
  });
});
