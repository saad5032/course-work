import Search from "./Search"
import Users from "./Users"
import Loading from "./Loading"


function Home({users , clearUsers , searchUsers , loading , alert , showAlert}) {
    return (
        <>
            <Search clearUsers={clearUsers} searchUsers={searchUsers} alert={alert} showAlert={showAlert}/>
            {loading ? <Loading/> : ""}
            {/* {loading && <Loading />} */}
            <Users users={users}/>
        </>
    )
}

export default Home