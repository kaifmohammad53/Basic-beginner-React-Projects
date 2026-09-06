import { useState } from "react";
import bg from "./assets/bg.jpg";
import Input from "./Components/Input";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, SetAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    SetAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen m-0 p-0">
        <div className="w-full h-12 bg-green-600 flex justify-center items-center border-2 border-white-500 rounded-xl p-5 text-2xl font-bold fixed top-0">
          Currency Converter
        </div>

        <div className="relative flex flex-col p-5 justify-center items-center w-1/2 h-3/5 rounded-xl border-solid border-blue-500 border-2 overflow-hidden">
          <img
            src={bg}
            alt="bg-mage"
            className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-40"
          />
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                SetAmount(amount);
              }}
              onAmountChange={(amount) => {
                SetAmount(amount);
              }}
              selectCurrecy={from}
            />

            <button
              className="absolute z-20 left-1/2 -translate-x-1/2 -translate-y-2/3 w-30 h-20 rounded-2xl px-5 bg-blue-600 text-white border-2 border-white shadow-lg text-2xl"
              onClick={swap}
            >
              Swap
            </button>

            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectCurrecy={from}
            />

            <button
              type="submit"
              className="relative p-5 z-10 m-5 w-full h-1/6 rounded-xl border border-white bg-blue-700 text-white text-2xl text-center"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
        </div>
      </div>
    </>
  );
}

export default App;
