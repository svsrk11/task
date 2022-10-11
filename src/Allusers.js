import { useEffect, useState } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useNavigate } from "react-router-dom";


function Allusers() {

  const navigate = useNavigate();
  
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    console.log("json", json);
    setUsers(json.data);
    
  };
  React.useEffect(() => {
    f();
  }, []);
  

 return (
    <div className="App">
      <h1>Hello users!</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              
              <div key={user.id} >
                
               
                <p>
                  <strong onClick={() => navigate(`/users/${user.id}`)}> {user.first_name} </strong>
                  <strong onClick={() => navigate(`/users/${user.id}`)}> {user.last_name} </strong>
                </p>
                
                
               
                
              </div>
            );
          })}
      </div>
    </div>
  );
}



export default Allusers;