import Chai from "./chai"
import { useState } from "react"

function App() {
const[count,setCount] = useState(0);
function decrese (){
  if (count > 0){
    setCount(count-1)
  }
}

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value : {count}</h2>
    <button
    onClick={()=> setCount(count +1)}>add</button>
    <br /><br />
    <button onClick={decrese}>remove</button>
    </>
    
  )
}

export default App
