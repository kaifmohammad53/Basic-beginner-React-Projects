import { useState } from 'react'
import { genRandomNum , sum} from './helper';
function App() {
  const [ticket, setTicket] = useState(genRandomNum(3));
  let isWin=sum(ticket)===15;
  let buyTicket=()=>{
    setTicket(genRandomNum(3));
  }
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-3/5 w-2/3 border-2 border-pink-800 rounded-xl gap-8">
          <h1 className="text-5xl text-pink-700 text-center font-bold p-2">
            Lottery Game!
          </h1>
          <div className="text-3xl border-2 border-pink-200 rounded-xl w-5/10 text-center">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
          </div>
          <button className='border-pink-200 border-2 rounded-xl p-5 text-2xl font-bold' onClick={buyTicket}>Buy New Ticket</button>
          <h2 className='text-3xl text-pink-700 font-bold'>{isWin && "Congratulation! You Won"}</h2>
        </div>
      </div>
    </>
  );
}

export default App
