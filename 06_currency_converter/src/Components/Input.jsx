const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrecy = "usd",
}) => {
  return (
    <div className="flex flex-col justify-around relative gap-3 p-10 z-10 m-2 w-full h-1/3 rounded-xl border-blue-500 border- bg-white">
      <div className="flex justify-between text-xl items-center">
        <p>{label}</p>
        <p>Currency Type</p>
      </div>

      <div className="flex justify-between text-xl items-center">
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-1/2 overflow-hidden"
        />

        <select
          value={selectCurrecy}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="border-gray-500 border-2 rounded-xl"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
