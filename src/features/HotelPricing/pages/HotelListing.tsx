import { useQuery } from "@tanstack/react-query";
import HotelCard from "../components/HotelCard";
import { Hotel, fetchHotels } from "../../../api";

export default function HotelListing() {
  const { isPending, isError, data, error } = useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });

  if (isPending) return <h2 className="text-2xl font-bold">Loading...</h2>;

  if (isError) return <h2 className="text-2xl font-bold">{error.message}</h2>;

  return (
    <>
      {data.map(({ id, ...rest }) => (
        <HotelCard key={id} {...rest} />
      ))}
    </>
  );
}
