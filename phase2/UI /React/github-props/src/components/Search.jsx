import { useState } from "react"
import Alert from "./Alert"
function Search({clearUsers , searchUsers , alert , showAlert}){
    const [username , setUsername] = useState('')

    const onChangeHandler = (e) =>{
        setUsername(e.target.value)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        if(username == ""){
            return showAlert({type : "danger" , msg : "enter a username"})
        }
        searchUsers(username)
        setUsername("")
        
    }

    return (
        <div className="header">
            <h1>Github Search Engine</h1>
            <Alert alert={alert} />
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username" onChange={onChangeHandler} value={username}/>
                <br />
                <button className="submit">Search</button>
            </form>
            <br />
            <button className="clear" onClick={clearUsers}>Clear</button>
        </div>
    )
}

export default Search