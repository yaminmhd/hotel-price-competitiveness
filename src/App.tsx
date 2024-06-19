import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import queryClient from "./queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">
          Hotel Currencies & Price Competitiveness
        </h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;
