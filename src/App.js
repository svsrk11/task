import React from "react";

import { BrowserRouter ,Router, Routes, Route, Link } from "react-router-dom";
import{ Home }from "./Home";
import { NoMatch } from './NoMatch'
import Allusers from "./Allusers";
import { UserDetails } from "./UserDetails";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      
     
        <div>
          <nav>
            <ul>

            <Link to="/">      HOME        </Link>
                <Link to="/users">   USERS    </Link>


              
             
            </ul>
          </nav>
          <div className="content">
          
              
        <Routes>
          
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='users' element={<Allusers/>}>
        </Route>
        <Route path='users/:userId' element={<UserDetails />} />

        <Route path='*' element={<NoMatch />} />
        
        </Routes>
          
          </div>
        </div>
      
    </div>
    </BrowserRouter>
  );
};

export default App;