import { render, screen } from "@testing-library/react";
import HotelCard, { HotelCardProps } from "../HotelCard";

describe("<HotelCard/>", () => {
  it("should render hotel details on the card component", () => {
    const props: HotelCardProps = {
      photo: "test.jpg",
      name: "Hotel Name",
      description: "Hotel Description",
      stars: 5,
      address: "Hotel Address",
      rating: 9.5,
    };

    render(<HotelCard {...props} />);

    expect(screen.getByAltText("Hotel Name")).toBeInTheDocument();
    expect(screen.getByText("Hotel Name")).toBeInTheDocument();
    expect(screen.getByText("Hotel Address")).toBeInTheDocument();
    expect(screen.getByText("9.5 / 10")).toBeInTheDocument();
    expect(screen.getByText("⭐⭐⭐⭐⭐")).toBeInTheDocument();
  });
});
