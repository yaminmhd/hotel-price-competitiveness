import { render, screen } from "@testing-library/react";
import HotelCard, { HotelCardProps } from "../HotelCard";

describe("<HotelCard/>", () => {
  const baseProps: HotelCardProps = {
    photo: "test.jpg",
    name: "Hotel Name",
    description: "Hotel Description",
    stars: 5,
    address: "Hotel Address",
    rating: 9.5,
    price: 100,
    currency: "USD",
  };

  it("should render hotel details on the card component", () => {
    render(<HotelCard {...baseProps} />);

    expect(screen.getByAltText("Hotel Name")).toBeInTheDocument();
    expect(screen.getByText("Hotel Name")).toBeInTheDocument();
    expect(screen.getByText("Hotel Address")).toBeInTheDocument();
    expect(screen.getByText("9.5 / 10")).toBeInTheDocument();
    expect(screen.getByText("⭐⭐⭐⭐⭐")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Our Price: USD 100.00" })
    ).toBeInTheDocument();
  });

  it("should render rates unavailable when price is not available", () => {
    const props: HotelCardProps = { ...baseProps, price: undefined };

    render(<HotelCard {...props} />);

    expect(screen.getByText("Rates unavailable")).toBeInTheDocument();
  });
});
