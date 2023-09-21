import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { useState, useEffect, useContext } from 'react';
import axios from "axios"
import User from './components/User';

import GithubContext from './contexts/GitHub/githubContext';

function App() {
  // const [alert, setAlert] = useState(null)
  // const [user, setUser] = useState({})
  // const [repos, setRepos] = useState([])

  const githubContext = useContext(GithubContext)

  useEffect(() => {
    githubContext.allUsers()
  }, [])

  // const showAlert = (alert) => {
  //   setAlert(alert)
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 2500)
  // }


  // const clearUsers = () => {
  //   setUsers([])
  // }

  // async function searchUsers(username) {
  //   try {
  //     setUsers([])
  //     setLoading(true)
  //     const res = await axios.get(`https://api.github.com/search/users?q=${username}`)
  //     setUsers(res.data.items)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //     showAlert({ type: "danger", msg: "Something went wrong" })
  //     setLoading(false)
  //   }
  // }

  // const fetchUser = async (uname) => {
  //   try {
  //     const res = await axios.get(`https://api.github.com/users/${uname}`, {
  //       headers: {
  //         "Authorization": `Bearer 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`
  //       }
  //     })
  //     setUser(res.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const topRepos = async (uname) => {
  //   try {
  //     const res = await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`, {
  //       headers: {
  //         "Authorization": `Bearer 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`
  //       }
  //     })
  //     setRepos(res.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home
        //  clearUsers={clearUsers}
          // searchUsers={searchUsers}
          // alert={alert} showAlert={showAlert} 
          />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='/user/:uname' element={<User
        //  topRepos={topRepos}
          // fetchUser={fetchUser} user={user} repos={repos}
        />} />
      </Routes>
      <Footer />
    </>
  );

}

export default App;