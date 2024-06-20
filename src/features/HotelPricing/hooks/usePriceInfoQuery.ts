import { useQuery } from "@tanstack/react-query";
import { Price, fetchPrices } from "../../../api";
import { CITY } from "../constants";

export default function useHotelQuery(currency: string) {
  return useQuery<Price[]>({
    queryKey: ["prices", currency],
    queryFn: () => fetchPrices(CITY, currency),
    enabled: !!currency,
  });
}
