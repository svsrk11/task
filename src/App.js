import React from "react";

import { BrowserRouter ,Router, Routes, Route, Link } from "react-router-dom";


import UsingFetch from "./UsingFetch";


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
          <Route path="/users" element={<UsingFetch/> } />
        
        </Routes>
          
          </div>
        </div>
      
    </div>
    </BrowserRouter>
  );
};

export default App;