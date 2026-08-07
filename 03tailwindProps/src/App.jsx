import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Componnents/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:"21",
  }
  let newArr=[1,3,5]
  return (
    <>
      <h1 className="bg-green-800 text-black p-4 rounded-xl">TailWind Test</h1>
      <Card username="chaiwala" btnText="visit me" />
      <Card username="hitesh"/>
    </>
  );
}

export default App
