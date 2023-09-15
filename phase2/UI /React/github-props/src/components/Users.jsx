import { Link } from "react-router-dom";

function Users({ users }) {
    return (
        <center>
            <div className="row">
                {users.map((user, i) => {
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