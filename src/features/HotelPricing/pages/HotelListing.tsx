import { useEffect, useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import useHotelQuery from "../hooks/useHotelQuery";
import usePriceInfoQuery from "../hooks/usePriceInfoQuery";
import { LOCAL_STORAGE_KEY } from "../constants";
import HotelList from "../components/HotelList";

export default function HotelListing() {
  const getInitialCurrency = () => {
    const savedCurrency = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCurrency ? savedCurrency : "USD";
  };
  const [currency, setCurrency] = useState<string>(getInitialCurrency());

  const {
    data: hotelsData,
    isPending: hotelsIsPending,
    isError: hotelsIsError,
  } = useHotelQuery();

  const {
    data: pricesData,
    isPending: pricesIsPending,
    isError: pricesIsError,
  } = usePriceInfoQuery(currency);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, currency);
  }, [currency]);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  if (hotelsIsPending || pricesIsPending)
    return <h2 className="text-2xl font-bold">Loading...</h2>;

  if (hotelsIsError || pricesIsError)
    return <h2 className="text-2xl font-bold">Error...</h2>;

  return (
    <>
      <CurrencySelector
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <HotelList hotels={hotelsData} prices={pricesData} currency={currency} />
    </>
  );
}
