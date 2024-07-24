import UserData from "./UserData";
import { useEffect, useState } from "react";
const API = "http://jsonplaceholder.typicode.com/users";
const App = () => {

    const [users,setUser] = useState([]);
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data.length > 0) {
                setUser(data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() =>{
        fetchUsers(API);
    },[])
    return<>
        <h1>React Table</h1>
        <table style={{border:"2px solid black"}}>
            <thead>
                <tr style={{border:"2px solid black"}}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <UserData users={users}/>
            </tbody>
        </table>
    </>
};
export default App;