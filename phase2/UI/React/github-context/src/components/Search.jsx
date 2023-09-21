import { useState , useContext} from "react"
import Alert from "./Alert"

import GithubContext from "../contexts/GitHub/githubContext"
function Search(){

    const githubContext = useContext(GithubContext)
    const [username , setUsername] = useState('')

    const onChangeHandler = (e) =>{
        setUsername(e.target.value)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        // if(username == ""){
        //     return showAlert({type : "danger" , msg : "enter a username"})
        // }
        githubContext.searchUsers(username) 
        setUsername("")
        
    }

    return (
        <div className="header">
            <h1>Github Search Engine</h1>
            <Alert alert={githubContext.alert} />
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username" onChange={onChangeHandler} value={username}/>
                <br />
                <button className="submit">Search</button>
            </form>
            <br />
            <button className="clear" onClick={githubContext.clearUsers}>Clear</button>
        </div>
    )
}

export default Search