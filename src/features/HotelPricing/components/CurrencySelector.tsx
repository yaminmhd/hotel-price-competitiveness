type CurrencySelectorProps = {
  currency: string;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CurrencySelector({
  currency,
  handleCurrencyChange,
}: CurrencySelectorProps) {
  return (
    <div data-testid="currency-selector" className="mb-4">
      <label htmlFor="currency">Select Currency: </label>
      <select id="currency" value={currency} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="SGD">SGD</option>
        <option value="CNY">CNY</option>
        <option value="KRW">KRW</option>
      </select>
    </div>
  );
}
