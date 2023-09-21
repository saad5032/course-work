import { Link } from "react-router-dom";
import GithubContext from "../contexts/GitHub/githubContext";
import { useContext } from "react";
function Users({ users }) {
    const githubContext = useContext(GithubContext)
    return (
        <center>
            <div className="row">
                {githubContext.users.map((user, i) => {
                    return (
                        <div className="side" key={i}>
                            <img src={user.avatar_url} alt="test" height="200px" />
                            <h2>{user.login}</h2>
                            <Link to={`/user/${user.login}`}>Click Profile</Link>
                        </div>
                    )
                })}
            </div>
        </center>
    )
}

export default Users