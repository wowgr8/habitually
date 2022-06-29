import React from "react";
import SearchBar from "./SearchBar"; // if we choose to implement
// import { Link } from "react-router-dom"; // for loggin in
// import for any image/logo for app

function Header(){
  return(
    <React.Fragment>
      <h1>Header app name/logo Placeholder: HABITUALLY</h1>
      <SearchBar />
      <p>placeholder for Link tag for Login.js</p>
    </React.Fragment>
  );
}

export default Header;