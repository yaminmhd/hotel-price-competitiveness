import axios, { AxiosError } from "axios";

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error.response?.data || error.message);
};

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
      return errorHandler(error);
    });
}

export type Price = {
  id: number;
  price?: number;
  competitors?: {
    [key: string]: number;
  };
  taxes_and_fees?: {
    tax: number;
    hotel_fees: number;
  };
};

export function fetchPrices(city: string, currency: string): Promise<Price[]> {
  return axios
    .get(`${import.meta.env.VITE_HOTEL_BASE_URL}${city}/1/${currency}`)
    .then((res) => res.data)
    .catch((error) => {
      return errorHandler(error);
    });
}
