const Input = (props) => {
  return (
    <div className="flex flex-col justify-around relative gap-3 p-10 z-10 m-2 w-full h-1/3 rounded-xl border border-blue-500 border- bg-white">
      <div className="flex justify-between text-xl items-center">
        <p>{props.Input}</p>
        <p>Currency Type</p>
      </div>
      <div className="flex justify-between text-xl items-center">
        <input type="text" placeholder="0" 
        className="w-15 overflow-hidden"
        />
        <select
          name="from"
          id="fromCurrency"
          className="border-gray-500 border-2 rounded-xl"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
}
export default Input