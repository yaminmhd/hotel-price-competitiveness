import { Hotel, Price } from "../../../../api";

export const mockHotelListData: Hotel[] = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    rating: 7.7,
    stars: 4,
    address: "108-8611 Tokyo Prefecture, Minato-ku, Takanawa 4-10-30, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
    description:
      "Boasting 15 food and beverage options, 2 swimming pools, and its own aquarium, Prince Hotel is right next to JR Shinagawa Train Station, from where Haneda Airport is only a 25-minute train ride away.",
  },
  {
    id: 2,
    name: "The Ritz-Carlton, Tokyo",
    rating: 9.1,
    stars: 5,
    address:
      "107-6245 Tokyo Prefecture, Minato-ku, Akasaka 9-7-1 Tokyo Midtown, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/NXnQ/i12_m.jpg",
    description:
      "Located at the heart of the downtown Roppongi area in Tokyo's tallest building, the 53rd-storey Ritz-Carlton offers elegant luxury high above Tokyo’s busy streets.",
  },
  {
    id: 3,
    name: "Park Hyatt Tokyo",
    rating: 9.2,
    stars: 5,
    address:
      "163-1055 Tokyo Prefecture, Shinjuku-ku, Nishishinjuku 3-7-1-2, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/VuLE/i1_m.jpg",
    description:
      "High above Shinjuku’s lively streets, the wide windows of Park Hyatt Tokyo’s spacious rooms offer beautiful views of Mount Fuji or Shinjuku.",
  },
  {
    id: 4,
    name: "Hotel Odakyu Hotel Century Southern Tower",
    rating: 8.9,
    stars: 3,
    address: "151-8583 Tokyo Prefecture, Shibuya-ku, Yoyogi 2-2-1, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/hYjB/i1_m.jpg",
    description:
      "<p>Offering a restaurant and a fitness centre, Odakyu Hotel Century Southern Tower is located in Tokyo. Free WiFi access is available.",
  },
  {
    id: 5,
    name: "Hotel Book And Bed Tokyo Shinjuku",
    rating: 8.4,
    stars: 2,
    address:
      "160-0021 Tokyo Prefecture, Shinjuku Kabukicho 1-27-5 Kabukicho APM Building 8F, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ahU1/i8_m.jpg",
    description:
      "<p>Set in Tokyo, 1.9 km from Tokyo Metropolitan Government Building, Book And Bed Tokyo Shinjuku features air-conditioned rooms and a bar.",
  },
  {
    id: 6,
    name: "HUNDRED STAY Tokyo Shinjuku",
    rating: 6.7,
    stars: 3,
    address: "2 27 7 Hyakunincho Shinjuku Ku, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/gS3z/i16_m.jpg",
    description:
      "<p>A stay at HUNDRED STAY Tokyo Shinjuku places you in the heart of Tokyo, walking distance from Museum of Haiku Literature and Kaichuinari Shrine.",
  },
];

export const mockPriceListDataUSD: Price[] = [
  {
    id: 1,
    price: 120,
    competitors: {
      "Booking.com": 125,
      "Hotels.com": 121,
      Expedia: 120,
      getaroom: 140,
      "AMOMA.com": 132.77,
    },
  },
  {
    id: 2,
    price: 841,
  },
  {
    id: 3,
    price: 715,
    competitors: {
      Expedia: 722.86,
      Prestigia: 590.15,
    },
  },
  {
    id: 4,
    price: 155,
    competitors: {
      Kayak: 169.71,
      getaroom: 184.05,
    },
  },
  {
    id: 5,
    price: 121,
    competitors: {
      Prestigia: 122.49,
      Kayak: 139.5,
    },
  },
  {
    id: 6,
    price: 95,
    competitors: {
      "Booking.com": 103.3,
      "Agoda.com": 126.67,
    },
  },
  {
    id: 7,
    price: 123,
  },
  {
    id: 8,
    price: 123,
  },
];

export const mockPriceListDataSGD: Price[] = [
  {
    id: 1,
    price: 164,
    competitors: {
      Traveloka: 190,
      Expedia: 163,
    },
    taxes_and_fees: {
      tax: 13.12,
      hotel_fees: 16.4,
    },
  },
  {
    id: 2,
    price: 1150,
    taxes_and_fees: {
      tax: 92,
      hotel_fees: 115,
    },
  },
  {
    id: 3,
    price: 979.74,
    competitors: {
      Expedia: 981.88,
      Prestigia: 801.62,
    },
  },
  {
    id: 4,
    price: 212.39,
    competitors: {
      Kayak: 230.52,
      getaroom: 250,
    },
  },
  {
    id: 7,
    price: 168.5,
    taxes_and_fees: {
      tax: 13.48,
      hotel_fees: 16.85,
    },
  },
  {
    id: 8,
    price: 168.5,
    taxes_and_fees: {
      tax: 13.48,
      hotel_fees: 16.85,
    },
  },
];
