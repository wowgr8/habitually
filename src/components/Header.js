import React from "react";
import SearchBar from "./SearchBar"; // if we choose to implement

import { Link, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
// import for any image/logo for app

function Header({setisAuth}){




  return(
    <div className="container">
      <h1>Header app name/logo Placeholder: HABITUALLY</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
        <div>
          <SearchBar />
        </div>
      </ul>
      {/* Temp here for dev purposes */}
      <LandingPage/> 
    </div>
  );
}

export default Header;