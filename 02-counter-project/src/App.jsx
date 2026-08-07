import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  // let counter = 5;
  const addValue=()=>{
    if(counter>20){
      alert("bus karde bhai!");
    }
    else{
    setCounter(counter++);
    }
  }
  const removeValue=()=>{
    if(counter<0){
      alert("0 ke neeche nhi jaata hai ji");
    }
    else{
      setCounter(counter--);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value:{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  ) 
}

export default App
