import { useState } from "react"

function Test(){
    // let count=0 initializing this way  is wrong in react
    // you need to do this 
    const [count,setCount] = useState(0)
    function increment(){
        // count = count+1 is wrong
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
    <>
      <button onClick={decrement}> - </button>
      <h2> {count}</h2>
      {console.log(count)}
      <button onClick={increment}> +</button>
   </>

    )
}
export default Test