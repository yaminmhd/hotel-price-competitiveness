export type Hotel = {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  description: string;
};
export type HotelCardProps = Omit<Hotel, "id">;

export default function HotelCard({
  photo,
  name,
  stars,
  address,
  rating,
}: HotelCardProps) {
  return (
    <div
      data-testid="hotel-card"
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
        </div>
      </div>
    </div>
  );
}
