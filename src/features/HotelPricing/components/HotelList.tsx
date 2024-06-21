import { Hotel, Price } from "../../../api";
import HotelCard from "./HotelCard";

export type HotelListProps = {
  hotels: Hotel[];
  prices: Price[];
  currency: string;
};

export default function HotelList({
  hotels: hotelsData,
  prices: pricesData,
  currency,
}: HotelListProps) {
  const hotelDataWithPrices = hotelsData.map((hotel) => {
    const priceInfo = pricesData.find((price) => price.id === hotel.id);
    return {
      ...hotel,
      price: priceInfo?.price,
      competitors: priceInfo?.competitors,
      taxes_and_fees: priceInfo?.taxes_and_fees,
    };
  });

  const sortedHotelData = () => {
    const hotelDataWithPriceInfo = hotelDataWithPrices.filter(
      (hotel) => hotel.price !== undefined
    );
    const hotelDataWithNoPriceInfo = hotelDataWithPrices.filter(
      (hotel) => hotel.price === undefined
    );
    return [...hotelDataWithPriceInfo, ...hotelDataWithNoPriceInfo];
  };

  const renderHotelCards = () => {
    return sortedHotelData().map(({ id, ...rest }) => (
      <HotelCard key={id} {...rest} currency={currency} />
    ));
  };

  return <div>{renderHotelCards()}</div>;
}
