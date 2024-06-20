import { waitFor, renderHook } from "@testing-library/react";
import useHotelQuery from "../useHotelQuery";
import { mockHotelListData } from "../../pages/__tests__/mockData";
import { createWrapper } from "./setup";

describe("useHotelQuery", () => {
  it("should render hotel details with useHotelQuery hook", async () => {
    const { result } = renderHook(() => useHotelQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBeDefined();
    expect(result.current.data).toEqual(mockHotelListData);
  });
});
