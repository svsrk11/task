import { useParams } from 'react-router-dom'

import * as React from "react";

export const UserDetails = () => {
  const { userId } = useParams()
  const i = userId;
  console.log(i);
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUserData();
  }, []);
  

  const fetchUserData=async ()=>{
    const res = await fetch(`https://reqres.in/api/users/${userId}`);
    const json = await res.json();
    console.log("json", json);
    setUsers(json.data);
    
  };
  console.log("users", users);

  
  return <div >
    Details :
  <p>USER ID: {userId} </p>
  <p>Name:{" "} {users.first_name}{" "} {users.last_name}</p>
  <p>E-mail: {" "} {users.email}</p>
  <img key={users.avatar} src={users.avatar} />
  
  </div>

}