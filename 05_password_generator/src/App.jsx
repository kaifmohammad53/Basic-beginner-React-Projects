import { useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  return (
    <>
      <div className="p-5 flex justify-center items-center font-bold text-4xl text-white">
        Password Generator
      </div>
      <div className="flex justify-center items-center py-2">
        <div className="min-h-auto w-[60vw] p-5 shadow-lg bg-gray-800 rounded-2xl flex flex-col justify-center align-center gap-5 py-5">
          <div className="w-full px-5 flex flex-row align-center">
            <input
              type="text"
              className="h-12 w-[90%] rounded-l-2xl p-5 text-2xl text-orange-500 font-semibold outline-none"
            />
            <button className="h-12 w-[10%] rounded-r-2xl bg-blue-500 text-xl font-medium text-center align-center p-0 m-0 outline-none">
              copy
            </button>
          </div>
          <div className="flex flex-row justify-evenly align-center text-orange-500 text-2xl">
            <div className="px-5">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
              />
              <label className="m-5">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1 align-center">
              <input type="checkbox" />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 align-center">
              <input type="checkbox" />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
