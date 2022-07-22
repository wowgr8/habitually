import React from "react";
import SearchBar from "./SearchBar"; // if we choose to implement
import { Link } from "react-router-dom";
// import for any image/logo for app

function Header(){
  return(
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Header;