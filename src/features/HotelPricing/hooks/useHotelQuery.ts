import { useQuery } from "@tanstack/react-query";
import { Hotel, fetchHotels } from "../../../api";
import { CITY } from "../constants";

export default function useHotelQuery() {
  return useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: () => fetchHotels(CITY),
    throwOnError: true,
  });
}
