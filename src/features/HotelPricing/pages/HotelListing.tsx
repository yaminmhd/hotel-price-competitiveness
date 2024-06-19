import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HotelCard, { Hotel } from "../components/HotelCard";

export default function HotelListing() {
  const { isPending, isError, data, error } = useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: () =>
      axios
        .get("https://61c3e5d2f1af4a0017d99115.mockapi.io/hotels/tokyo")
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
        }),
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
