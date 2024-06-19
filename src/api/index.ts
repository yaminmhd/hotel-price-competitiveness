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

export function fetchHotels(): Promise<Hotel[]> {
  return axios
    .get(`${import.meta.env.VITE_HOTEL_BASE_URL}/tokyo`)
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

export function fetchPrices(id: number, currency: string): Promise<Price[]> {
  return axios
    .get(`${import.meta.env.VITE_HOTEL_BASE_URL}/tokyo/${id}/${currency}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
}
