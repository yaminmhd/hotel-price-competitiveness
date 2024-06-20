import { waitFor, renderHook } from "@testing-library/react";
import usePriceInfoQuery from "../usePriceInfoQuery";
import { mockPriceListDataUSD } from "../../pages/__tests__/mockData";
import { createWrapper } from "./setup";

describe("usePriceInfoQuery", () => {
  it("should render price info details with useHotelQuery hook", async () => {
    const { result } = renderHook(() => usePriceInfoQuery("USD"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBeDefined();
    expect(result.current.data).toEqual(mockPriceListDataUSD);
  });
});
