import { useEffect, useState } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function UsingFetch() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
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
              <div key={user.id}>
                
                <p>
                  <strong> {user.first_name} </strong>
                  <strong> {user.last_name} </strong>
                </p>
                
                <img key={user.avatar} src={user.avatar} />
                <p> {user.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UsingFetch />, rootElement);

export default UsingFetch;
