import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import queryClient from "./queryClient";
import HotelListing from "./features/HotelPricing/pages/HotelListing";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex-col justify-center">
        <h1 className="text-2xl font-bold">
          Hotel Currencies & Price Competitiveness
        </h1>
        <HotelListing />
      </div>
    </QueryClientProvider>
  );
}

export default App;
