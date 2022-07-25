import React, {useState} from "react";
import SearchBar from "./SearchBar"; // if we choose to implement

import { Link, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
// import for any image/logo for app

function Header({isAuth, setIsAuth}){

  // const [isAuth, setIsAuth] = useState();

  return(
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">HABITUALLY</h1>

        {!isAuth 
          ? <>
              <div class="mb-2 sm:mb-0">
              {/* <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a> */}
                <Link class="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/Login">Sign up</Link>
              </div>
            
            </>
          : (
            // <>
            //   <Link to="/">Home</Link>
            //   <Link to="/Login">Sign In</Link>
            // </>
            <div>
          
                <div class="mb-2 sm:mb-0">
                  <Link class="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/">Home</Link>
                </div>
            
                  <Link class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/Login">Sign In</Link>
              
              
                  {/* <SearchBar /> */}
                
            
            </div>


            )}

        {/* Temp here for dev purposes */}
        {/* <LandingPage/>  */}

    </nav>
  );
}

export default Header;




// conditional render does not seem to be acknowledging when Authentication is true, which should show links for home and sign in