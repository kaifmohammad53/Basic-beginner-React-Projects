import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import bg from "../src/assets/bg.jpg"
import Input from "./Components/Input";
function App() {
  let [amount,SetAmount]=useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo=useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);
  let handleSubmit=(e)=>{
    setConvertedAmount(currencyInfo[toCurrency]*amount);
  }
  let swap=()=>{
    SetAmount(convertedAmount);
    let temp=fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setConvertedAmount(amount);
  }
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
            label="from"
            amount={amount}
            currencyOptions={currencyOptions}
            onCurrencyChange={(currency) => {
              setFromCurrency(currency);
            }}
            onAmountChange={(amount) => {
              SetAmount(amount);
            }}
            selectCurrecy={fromCurrency}
          />

          <button
            className="absolute z-20 left-1/2 -translate-x-1/2 -translate-y-2/3 w-30 h-20 rounded-2xl px-5 bg-blue-600 text-white border-2 border-white shadow-lg text-2xl"
            onClick={swap}
          >
            Swap
          </button>

          <Input
            label="to"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            onCurrencyChange={(currency) => {
              setToCurrency(currency);
            }}
            selectCurrecy={toCurrency}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="relative p-5 z-10 m-5 w-full h-1/6 rounded-xl border border-white bg-blue-700 text-white text-2xl text-center"
          >
            Convert {fromCurrency.toUpperCase()} To {toCurrency.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
