import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import {
  mockHotelListData,
  mockPriceListDataCNY,
  mockPriceListDataSGD,
  mockPriceListDataUSD,
} from "../features/HotelPricing/pages/__tests__/mockData";
import { CITY } from "../features/HotelPricing/constants";

const handlers = [
  http.get(`${import.meta.env.VITE_HOTEL_BASE_URL}${CITY}`, () => {
    return HttpResponse.json(mockHotelListData);
  }),
  http.get(`${import.meta.env.VITE_HOTEL_BASE_URL}${CITY}/1/USD`, () => {
    return HttpResponse.json(mockPriceListDataUSD);
  }),
  http.get(`${import.meta.env.VITE_HOTEL_BASE_URL}${CITY}/1/SGD`, () => {
    return HttpResponse.json(mockPriceListDataSGD);
  }),
  http.get(`${import.meta.env.VITE_HOTEL_BASE_URL}${CITY}/1/CNY`, () => {
    return HttpResponse.json(mockPriceListDataCNY);
  }),
];

export const server = setupServer(...handlers);
