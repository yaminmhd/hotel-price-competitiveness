import HotelCard from "../components/HotelCard";
import { useEffect, useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import useHotelQuery from "../hooks/useHotelQuery";
import usePriceInfoQuery from "../hooks/usePriceInfoQuery";
import { LOCAL_STORAGE_KEY } from "../constants";

export default function HotelListing() {
  const getInitialCurrency = () => {
    const savedCurrency = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCurrency ? savedCurrency : "USD";
  };
  const [currency, setCurrency] = useState<string>(getInitialCurrency());

  const { data: hotelsData, isPending: hotelsIsPending } = useHotelQuery();

  const { data: pricesData, isPending: pricesIsPending } =
    usePriceInfoQuery(currency);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, currency);
  }, [currency]);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  if (hotelsIsPending || pricesIsPending)
    return <h2 className="text-2xl font-bold">Loading...</h2>;

  const hotelDataWithPrices = hotelsData?.map((hotel) => {
    const priceInfo = pricesData?.find((price) => price.id === hotel.id);
    return {
      ...hotel,
      price: priceInfo?.price,
      competitors: priceInfo?.competitors,
      taxes_and_fees: priceInfo?.taxes_and_fees,
    };
  });

  const renderHotelCards = () => {
    return hotelDataWithPrices?.map(({ id, ...rest }) => (
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
