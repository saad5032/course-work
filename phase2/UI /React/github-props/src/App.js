import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import axios from "axios"
import User from "./components/User"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await axios.get("https://api.github.com/users" , {
          headers : {
            "Authorization" : `Bearer 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`
          }
        })
        setUsers(res.data)
        showAlert({msg : "users fetched" , type : "success"})
        setLoading(false)
      } catch (error) {
        console.log(error);
        showAlert({type : "danger" , msg : "Something went wrong"})
        setLoading(false)
      }
    }
    fetchData()
  },[])

  const showAlert = (alert) =>{
      setAlert(alert)
      setTimeout(()=>{
        setAlert(null)
      }, 2500)
    }
  

  const clearUsers = () => {
    setUsers([])
  }

  async function searchUsers(username) {
    try {
      setUsers([])
      setLoading(true)
      const res = await axios.get(`https://api.github.com/search/users?q=${username}`)
      setUsers(res.data.items)
      setLoading(false)
    } catch (error) {
      console.log(error);
      showAlert({type : "danger" , msg : "Something went wrong"})
      setLoading(false)
    }
  }

  const fetchUser = async (uname) => {
    try{
      const res = await axios.get(`https://api.github.com/users/${uname}`,{
        headers : {
          "Authorization" : `Bearer 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`
        }
      })
      setUser(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  const topRepos = async (uname ) =>{
    try {
      const res = await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`, {
        headers : {
          "Authorization" : `Bearer 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`
        }
      })
      setRepos(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home users={users} clearUsers={clearUsers}
         searchUsers={searchUsers} loading={loading}
          alert={alert} showAlert={showAlert} />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='/user/:uname' element={<User topRepos={topRepos} 
        fetchUser={fetchUser} user={user} repos={repos} loading={loading}/>}/>
      </Routes>
      <Footer />
    </>
  );

}

export default App;
