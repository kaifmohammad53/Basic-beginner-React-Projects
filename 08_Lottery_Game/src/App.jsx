import Lottery from './Lottery'
import { sum } from './helper'
const App = () => {
    let wincondition=(arr)=>{
        return arr.every((num)=>num===arr[0]);
    }
  return (
    <>
    <Lottery n={3} wincondition={wincondition}/>
    </>
  )
}
export default App