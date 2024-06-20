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
      screen.getByRole("heading", { name: "Price: USD 100" })
    ).toBeInTheDocument();
  });

  it("should render rates unavailable when price is not available", () => {
    const props: HotelCardProps = { ...baseProps, price: undefined };

    render(<HotelCard {...props} />);

    expect(screen.getByText("Rates unavailable")).toBeInTheDocument();
  });

  it.each([
    { price: 841.0, currency: "USD", expected: "840" },
    { price: 979.74, currency: "SGD", expected: "980" },
    { price: 5788.43, currency: "CNY", expected: "5790" },
    { price: 942163.89, currency: "KRW", expected: "942,200" },
  ])(
    `should render $price in $currency format as $expected`,
    ({ price, currency, expected }) => {
      const props: HotelCardProps = { ...baseProps, price, currency };

      render(<HotelCard {...props} />);

      expect(
        screen.getByRole("heading", {
          name: `Price: ${currency} ${expected}`,
        })
      ).toBeInTheDocument();
    }
  );

  it("should not render competitive price listing when competitors or price is not available", () => {
    const props: HotelCardProps = {
      ...baseProps,
      competitors: undefined,
      price: undefined,
    };

    render(<HotelCard {...props} />);

    expect(
      screen.queryByTestId("competitor-price-listing")
    ).not.toBeInTheDocument();
  });

  it("should render competitive price listing in a sorted manner from cheapest to expensive", () => {
    const props: HotelCardProps = {
      ...baseProps,
      competitors: {
        "Competitor 1": 80,
        "Competitor 2": 92,
        "Competitor 3": 105,
      },
    };

    render(<HotelCard {...props} />);

    expect(screen.getByText("Competitive Price Listing")).toBeInTheDocument();
    expect(screen.getByText("Competitor 1: USD 80")).toBeInTheDocument();
    expect(screen.getByText("Competitor 2: USD 90")).toBeInTheDocument();
    expect(screen.getByText("Our Price: USD 100")).toBeInTheDocument();
    expect(screen.getByText("Competitor 3: USD 110")).toBeInTheDocument();
  });

  it("should render expensive competitive price with a strikethrough", () => {
    const props: HotelCardProps = {
      ...baseProps,
      competitors: {
        "Competitor 1": 80,
        "Competitor 2": 92,
        "Competitor 3": 105,
      },
    };

    render(<HotelCard {...props} />);

    expect(screen.getByText("Competitor 3: USD 110")).toHaveClass(
      "last:line-through"
    );
  });
});
