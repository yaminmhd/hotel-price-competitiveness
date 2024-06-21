import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import queryClient from "./queryClient";
import HotelListing from "./features/HotelPricing/pages/HotelListing";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <div className="flex-col justify-center">
          <h1 className="text-2xl font-bold">
            Hotel Currencies & Price Competitiveness
          </h1>
          <HotelListing />
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
