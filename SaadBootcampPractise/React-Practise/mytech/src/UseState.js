import {useState,useEffect} from "react"
import axios from "axios"

// counter is best example to teach usestate

function UseState(){

    const [count, setC] = useState(0)
    const [data, setData] = useState([])
    //this use state() will be accepting the initial value of varible
    // usestate() function now return an array of variable count and the function setC which updates the variable count.
    
    function increment(){
        setC(count+1)
        //the changed value should always be in setC() function as this function is the one which is going to update later.
        // Dont log count here to check the value is updated or not.
    }

    function decrement(){
        setC(count-1)
    }

    // function printer(){
    //     console.log("hi");
    // }
    // printer()
    // this printer is called again and again the times the count value changes. Try clicking + button and observe console by inspecting
    // browser you will seee with each value of count hi is also printed. So imagine this function is responsible for 
    // api calls that many times the data will be fetched and if data is large it will cause memory problems. This is the reason we 
    // utilize useEffect for the api call type of functions.

    //Even if we change count value this api wont get called 
    useEffect(() => {
        async function apiCall(){
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
                setData(res.data)
                // console.log(data)
            }
            catch(err){
                console.log(err);
            }
        }
        apiCall()
    }, [count])  // this is dependency array 


    // I tried to access all the titles present in data which is updated by setData function in which value like res.data should be passed.
    // function mapArr(){
    //     data.map((ele)=>{
    //         console.log(ele.id);
    //     })
    // }
    // mapArr()

    return(
    <>
        {/* {console.log(count)} */}
        {/* log the variable count here to check whether its updated or not as usestate returns the updated states in an asynchronous fashion */}
    <button onClick={increment}>  +  </button>
    <h2>{count}</h2>

    <button onClick={decrement}>  -  </button>
    </>
    )
}

export default UseState;