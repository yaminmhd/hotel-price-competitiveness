import { fireEvent, render, screen } from "@testing-library/react";
import HotelListing from "../HotelListing";
import { UseQueryResult } from "@tanstack/react-query";
import { mockHotelListData, mockPriceListDataUSD } from "./mockData";
import { Hotel, Price } from "../../../../api";
import useHotelQuery from "../../hooks/useHotelQuery";
import usePriceInfoQuery from "../../hooks/usePriceInfoQuery";

vi.mock("../../hooks/useHotelQuery");
vi.mock("../../hooks/usePriceInfoQuery");
const mockHotelListingQuery = vi.mocked(useHotelQuery);
const mockPriceInfoQuery = vi.mocked(usePriceInfoQuery);

describe("<HotelListing/>", () => {
  it("should render hotels list successfully with default USD price info", () => {
    //TODO: Use msw to mock network requests
    mockHotelListingQuery.mockReturnValue({
      data: mockHotelListData as Hotel[],
      isPending: false,
    } as UseQueryResult<Hotel[]>);
    mockPriceInfoQuery.mockReturnValue({
      data: mockPriceListDataUSD as Price[],
      isPending: false,
    } as UseQueryResult<Price[]>);

    render(<HotelListing />);

    expect(screen.getAllByRole("listitem")).toHaveLength(6);
    expect(screen.getByTestId("currency-selector")).toBeInTheDocument();
  });

  it("should render new hotel price info when user selects another currency SGD", () => {
    mockHotelListingQuery.mockReturnValue({
      data: mockHotelListData as Hotel[],
      isPending: false,
    } as UseQueryResult<Hotel[]>);
    mockPriceInfoQuery.mockReturnValue({
      data: mockPriceListDataUSD as Price[],
      isPending: false,
    } as UseQueryResult<Price[]>);

    render(<HotelListing />);

    const selectElement = screen.getByLabelText(
      "Select Currency:"
    ) as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "SGD" } });

    expect(screen.getAllByRole("listitem")).toHaveLength(6);
    expect(screen.getByTestId("currency-selector")).toBeInTheDocument();
  });

  it("should render loading state", () => {
    mockHotelListingQuery.mockReturnValue({
      isPending: true,
    } as UseQueryResult<Hotel[]>);
    mockPriceInfoQuery.mockReturnValue({
      isPending: true,
    } as UseQueryResult<Price[]>);

    render(<HotelListing />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state", () => {
    mockHotelListingQuery.mockReturnValue({
      isError: true,
      error: {
        message: "Hotels: Something went wrong",
      },
    } as UseQueryResult<Hotel[]>);
    mockPriceInfoQuery.mockReturnValue({
      isError: true,
      error: {
        message: "PriceInfo: Something went wrong",
      },
    } as UseQueryResult<Price[]>);

    render(<HotelListing />);

    expect(
      screen.getByText("Hotels: Something went wrong")
    ).toBeInTheDocument();
    expect(
      screen.getByText("PriceInfo: Something went wrong")
    ).toBeInTheDocument();
  });
});
