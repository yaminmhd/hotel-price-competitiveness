import axios from "axios";

export type Hotel = {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  description: string;
};

export function fetchHotels(city: string): Promise<Hotel[]> {
  return axios
    .get(`${import.meta.env.VITE_HOTEL_BASE_URL}${city}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
}

export type Price = {
  id: number;
  price: number;
  competitors: {
    [key: string]: number;
  };
};

export function fetchPrices(
  id: number,
  city: string,
  currency: string
): Promise<Price[]> {
  return axios
    .get(`${import.meta.env.VITE_HOTEL_BASE_URL}/${city}/${id}/${currency}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
}
