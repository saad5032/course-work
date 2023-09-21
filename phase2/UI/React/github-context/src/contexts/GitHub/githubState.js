import { useReducer } from "react";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer"
import axios from "axios"
import { SET_LOADING, SET_REPOS, SET_USER, SET_USERS, SHOW_ALERT } from "../types";

function GithubState(props) {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const setLoading = () => dispatch({ type: SET_LOADING })

    const allUsers = async () => {
        try {
            setLoading()
            const res = await axios.get("https://api.github.com/users", {
                headers: {
                    "Authorization": `Bearer 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`
                }
            })
            dispatch({ type: SET_USERS, payload: res.data })

        } catch (error) {
            console.log(error);
        }
    }

    const clearUsers = () =>{
        dispatch({type : SET_USERS , payload : []})
    }

    const showAlert = (alert) => {
        dispatch({type : SHOW_ALERT , payload : alert})
        setTimeout(() => {
            dispatch({type : SHOW_ALERT , payload : null})
        }, 2500)
    }

    async function searchUsers(username) {
        try {
          dispatch({type : SET_USERS , payload : []})
          setLoading()
          const res = await axios.get(`https://api.github.com/search/users?q=${username}`)
          dispatch({type : SET_USERS , payload : res.data.items})
         
        } catch (error) {
          console.log(error);
        //   showAlert({ type: "danger", msg: "Something went wrong" })
        }
      }

      const fetchUser = async (uname) => {
        try {
          const res = await axios.get(`https://api.github.com/users/${uname}`, {
            headers: {
              "Authorization": `Bearer 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`
            }
          })
          dispatch({type : SET_USER , payload : res.data})
        } catch (error) {
          console.log(error);
        }
      }

      const topRepos = async (uname) => {
        try {
          const res = await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`, {
            headers: {
              "Authorization": `Bearer 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`
            }
          })
          dispatch({type : SET_REPOS , payload : res.data})
        } catch (error) {
          console.log(error);
        }
      }
    

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            alert: state.alert,
            allUsers ,
            showAlert,
            setLoading,
            searchUsers,
            fetchUser,
            clearUsers,
            topRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState