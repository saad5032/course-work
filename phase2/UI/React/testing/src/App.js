import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [flag, setFlag] = useState(true)

    useEffect(()=>{
      async function fetchData(){
        try{
          const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
          setData(res.data)
          setFilter(res.data)
          console.log(res.data);
        }catch(err){
          console.log(err);
        }
      }
      fetchData()
    },[])

  function hit(){
    const filData = data.filter(ele => ele.completed == flag)
    setFlag(!flag)
    setFilter(filData)
  }

  return (
  
    <>

    <center>
      <h1>Todos</h1>
      <button onClick={hit}>Filter Todos</button>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>userID</th>
            <th>titile</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody id='mytable'>
            {filter.map((ele,i)=>{
              return(
                <tr key={i}>
                    <td>{ele.id}</td>
                    <td>{ele.userId}</td>
                    <td>{ele.titile}</td>
                    <td>{ele.completed ? "True" : "False"}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </center>
    </>
  );
}

// internal styling
const styled = {
  fontSize : "20px",
  color : "blue"

}

export default App;
