import Lottery from './Lottery'
import { sum } from './helper'
const App = () => {
    let wincondition=(arr)=>{
        return sum(arr)===15;
    }
  return (
    <>
    <Lottery n={3} wincondition={wincondition}/>
    </>
  )
}
export default App