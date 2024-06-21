import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Hotel, Price } from "../../../api";
import { IoIosInformationCircleOutline } from "react-icons/io";

export type HotelCardProps = Omit<Price, "id"> &
  Omit<Hotel, "id"> & { currency: string };

export default function HotelCard({
  photo,
  name,
  stars,
  address,
  rating,
  price,
  currency,
  competitors,
  taxes_and_fees: taxesAndFees,
}: HotelCardProps) {
  const renderCompetitorsPriceList = () => {
    if (!competitors || !price) return null;
    const allCompetitons = { ...competitors, ["Our Price"]: price };

    const sortedCompetitors = Object.fromEntries(
      Object.entries(allCompetitons).sort(([, a], [, b]) => a - b)
    );

    const competitivePriceListing = Object.entries(sortedCompetitors).map(
      ([competitor, price]) => {
        const priceRounding = calculatePriceRounding(currency, price);
        return (
          <span
            key={competitor}
            className="text-sm text-gray-500 last:line-through"
          >
            {competitor}: {currency} {priceRounding}
          </span>
        );
      }
    );
    return (
      <div
        data-testid="competitor-price-listing"
        className="flex flex-col items-start"
      >
        <span className="text-sm text-gray-700 underline">
          Competitive Price Listing
        </span>
        {competitivePriceListing}
      </div>
    );
  };

  const renderSavings = () => {
    if (!competitors || !price) return null;
    const maxCompetitorPrice = Math.max(...Object.values(competitors));
    if (maxCompetitorPrice <= price) return null;

    const savings = ((maxCompetitorPrice - price) / maxCompetitorPrice) * 100;
    return (
      <span className="text-green-600 font-bold">
        Save {savings.toFixed(2)}%
      </span>
    );
  };

  const renderTaxInclusive = () => {
    if (!taxesAndFees) return null;
    return (
      <div className="flex flex-row justify-center">
        <span className="text-blue-500 text-sm">Tax Inclusive</span>
        <Popover>
          <PopoverTrigger>
            <IoIosInformationCircleOutline data-testid="info-icon" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col">
            <span className="text-blue-500 text-sm">
              Hotel fees - {taxesAndFees.hotel_fees}
            </span>
            <span className="text-blue-500 text-sm">
              City taxes - {taxesAndFees.tax}
            </span>
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  const calculatePriceRounding = (currency: string, price: number) => {
    if (currency === "USD" || currency === "SGD" || currency === "CNY") {
      return Math.round(price / 10) * 10;
    } else {
      return (Math.round(price / 100) * 100).toLocaleString();
    }
  };

  const renderPriceInCurrencyFormat = () => {
    if (price === undefined) {
      return <span role="heading">Rates unavailable</span>;
    }

    const roundedPrice = calculatePriceRounding(currency, price);

    return (
      <span role="heading">
        Price: {currency} {roundedPrice}
      </span>
    );
  };

  return (
    <div
      role="listitem"
      className="border border-gray-400 rounded-lg shadow-lg p-4 mb-4 flex"
    >
      <img
        src={photo}
        alt={name}
        className="w-1/3 h-auto rounded-lg object-cover mr-4"
      />
      <div className="flex flex-col justify-between w-2/3">
        <div>
          <h2 className="text-2xl font-bold">
            {name}{" "}
            <span className="text-yellow-500 mr-2">{"⭐".repeat(stars)}</span>
          </h2>
          <p className="text-gray-600 font-semibold">{address}</p>
          <div className="flex justify-center mt-2">
            <span className="text-gray-500 font-extrabold">{rating} / 10</span>
          </div>
          <div>{renderPriceInCurrencyFormat()}</div>
          <div>{renderTaxInclusive()}</div>
          <div className="flex flex-row justify-between items-baseline">
            <div>{renderCompetitorsPriceList()}</div>
            <div>{renderSavings()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
