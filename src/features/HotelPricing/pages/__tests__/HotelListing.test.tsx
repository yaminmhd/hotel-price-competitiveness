import { render, screen } from "@testing-library/react";
import HotelListing from "../HotelListing";
import { Hotel } from "../../components/HotelCard";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { mockHotelListData } from "./mockData";

vi.mock("@tanstack/react-query");
const mockHotelListingQuery = vi.mocked(useQuery<Hotel[]>);

describe("<HotelListing/>", () => {
  it("should render hotels list successfully", () => {
    mockHotelListingQuery.mockReturnValue({
      data: mockHotelListData as Hotel[],
      isPending: false,
    } as UseQueryResult<Hotel[]>);
    render(<HotelListing />);
    expect(screen.getAllByTestId("hotel-card")).toHaveLength(3);
    expect(screen.getByText("Shinagawa Prince Hotel")).toBeInTheDocument();
    expect(screen.getByText("The Ritz-Carlton, Tokyo")).toBeInTheDocument();
    expect(screen.getByText("Park Hyatt Tokyo")).toBeInTheDocument();
  });

  it("should render loading state", () => {
    mockHotelListingQuery.mockReturnValue({
      isPending: true,
    } as UseQueryResult<Hotel[]>);

    render(<HotelListing />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state", () => {
    mockHotelListingQuery.mockReturnValue({
      isError: true,
      error: {
        message: "Something went wrong",
      },
    } as UseQueryResult<Hotel[]>);

    render(<HotelListing />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
