import HotelCard from "../components/HotelCard";
import { useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import useHotelQuery from "../hooks/useHotelQuery";
import usePriceInfoQuery from "../hooks/usePriceInfoQuery";

export default function HotelListing() {
  const [currency, setCurrency] = useState<string>("USD");

  const {
    data: hotelsData,
    isPending: hotelsIsPending,
    isError: hotelsIsError,
    error: hotelsError,
  } = useHotelQuery();

  const {
    data: pricesData,
    isPending: pricesIsPending,
    isError: pricesIsError,
    error: pricesError,
  } = usePriceInfoQuery(currency);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  if (hotelsIsPending || pricesIsPending)
    return <h2 className="text-2xl font-bold">Loading...</h2>;

  if (hotelsIsError || pricesIsError)
    return (
      <>
        {hotelsError && (
          <h2 className="text-2xl font-bold">{hotelsError?.message}</h2>
        )}

        {pricesError && (
          <h2 className="text-2xl font-bold">{pricesError?.message}</h2>
        )}
      </>
    );

  const hotelDataWithPrices = hotelsData.map((hotel) => {
    const priceInfo = pricesData.find((price) => price.id === hotel.id);
    return {
      ...hotel,
      price: priceInfo?.price,
      competitors: priceInfo?.competitors,
      taxes_and_fees: priceInfo?.taxes_and_fees,
    };
  });

  const renderHotelCards = () => {
    return hotelDataWithPrices.map(({ id, ...rest }) => (
      <HotelCard key={id} {...rest} currency={currency} />
    ));
  };

  return (
    <>
      <CurrencySelector
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
      {renderHotelCards()}
    </>
  );
}
