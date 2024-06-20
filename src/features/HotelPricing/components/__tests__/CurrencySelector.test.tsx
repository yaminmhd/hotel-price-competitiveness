import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CurrencySelector from "../CurrencySelector";

describe("<CurrencySelector/>", () => {
  const handleCurrencyChangeMock = vi.fn();

  beforeEach(() => {
    render(
      <CurrencySelector
        currency="USD"
        handleCurrencyChange={handleCurrencyChangeMock}
      />
    );
  });

  it("renders all the currency options", () => {
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);
    expect(options[0]).toHaveValue("USD");
    expect(options[1]).toHaveValue("SGD");
    expect(options[2]).toHaveValue("CNY");
    expect(options[3]).toHaveValue("KRW");
  });

  it("should render with default value of USD", () => {
    expect(screen.getByLabelText("Select Currency:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("USD")).toBeInTheDocument();
  });

  it("should call handleCurrencyChange on currency change", () => {
    const selectElement = screen.getByLabelText(
      "Select Currency:"
    ) as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "SGD" } });
    expect(handleCurrencyChangeMock).toHaveBeenCalledTimes(1);
  });
});
