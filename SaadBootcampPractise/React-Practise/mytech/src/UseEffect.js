// just observe usestate file first.

import {useState, useEffect} from 'react'
import axios from "axios"

function UseEffect(){

    const [Data,setData]  = useState([]);   
    // array filter method is to return array which pass your test so if you want to return array of object
    // which have completed status as true then filter method is perfect as you are passing a test. 
    const [filteredData, setFilteredData] = useState([])
    // i use flag as i need to check the completed status for flase and return the array of objects with false status.
    const [flag,setFlag] = useState(true);

    // api calling function under useeffect so that we dont fetch data even again for example when we made changes to Data or filteredData or flag variable (like changin their states.)
    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
                setData(res.data) // Data variable of empty array will be updated with response data by  setData() function.
                setFilteredData(res.data)  // filteredData variable of empty array will be updated with response data by  setFilteredData() function.
             }
            catch(err){
                console.log(err);
            } 
        }
        fetchData()
    }, [])  // this is dependency array, for example if we pass flag variable inside this array then for every time flag changed between true and false this fetchdata function will be called.


    function hit(){
        const filter = Data.filter((ele) => ele.completed == flag)  // Data.filter will return an array of only true as flag is initialized as true in line 13.
        setFlag(!flag)
        setFilteredData(filter)
    }


    //onhit function
    // function onHit(){
    //     const filtered = data.filter((ele) => ele.completed == flag)
    //     setFlag(!flag)
    //     setFilteredData(filtered)
    //    }

   
    return (
        <>
          <center>
            <h1> My Todos </h1>
            <button onClick={hit}> Filter Todos</button>
            <table>
                <thead>
                    <tr>
                        <td>S.no</td>
                        <td>ID</td>
                        <td>Title</td>
                        <td>completed</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((ele,i)=>{
                        return(
                        <tr key={i}>    
                          <td>{ele.id}</td>
                          <td>{ele.userId}</td>
                          <td>{ele.title}</td>
                          <td>{ele.completed ? "true" : "false"}</td>
                          </tr>
                          )
                    })}
                </tbody>
            </table>
        </center>
        </>
      );
    }


export default UseEffect