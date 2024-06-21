import { render, screen } from "@testing-library/react";
import HotelList, { HotelListProps } from "../HotelList";
import {
  mockHotelListData,
  mockPriceListDataCNY,
} from "../../pages/__tests__/mockData";

describe("<HotelList/>", () => {
  const baseProps: HotelListProps = {
    hotels: mockHotelListData,
    prices: mockPriceListDataCNY,
    currency: "CNY",
  };

  it("should render hotels with no price info at the bottom of the list with message rates unavailable", () => {
    render(<HotelList {...baseProps} />);

    const hotelItems = screen.getAllByRole("listitem");
    const item = screen.getAllByRole("listitem")[hotelItems.length - 1];
    expect(item.textContent).toContain("Rates unavailable");
  });
});
