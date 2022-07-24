import React, {useState} from "react";
import SearchBar from "./SearchBar"; // if we choose to implement

import { Link, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
// import for any image/logo for app

function Header({isAuth, setIsAuth}){

  // const [isAuth, setIsAuth] = useState();

  return(
    <div className="text-5xl font-extrabold ...">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Header app name/logo Placeholder: HABITUALLY</h1>
      {!isAuth 
        ? <>
          <Link to="/Login">Sign up</Link>
          </>
        : (
          // <>
          //   <Link to="/">Home</Link>
          //   <Link to="/Login">Sign In</Link>
          // </>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Sign In</Link>
              </li>
              <div>
                <SearchBar />
              </div>
            </ul>
          </div>


          )}

      {/* Temp here for dev purposes */}
      {/* <LandingPage/>  */}
    </div>
  );
}

export default Header;




// conditional render does not seem to be acknowledging when Authentication is true, which should show links for home and sign in