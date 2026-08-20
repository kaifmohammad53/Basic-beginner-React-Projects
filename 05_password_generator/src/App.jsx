import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+-:,."
    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed]);
  const copyToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,16);
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]);
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
              value={password}
              placeholder="password"
              readOnly
              ref={passwordRef}
              className="h-12 w-[90%] rounded-l-2xl p-5 text-2xl text-orange-500 font-semibold outline-none"
            />
            <button className="h-12 w-[10%] rounded-r-2xl bg-blue-500 text-xl font-medium text-center align-center p-0 m-0 outline-none"
            onClick={copyToClipBoard}
            >
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
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="m-5">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1 align-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={(prev) => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 align-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={(prev) => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
