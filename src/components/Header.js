import React, {useState} from "react";
import SearchBar from "./SearchBar"; // if we choose to implement

import { Link, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
// import for any image/logo for app

function Header({isAuth, setIsAuth}){

  // const [isAuth, setIsAuth] = useState();

  return(
    <nav className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="sticky top-0 z-10 h-16 border-b bg-white lg:py-2.5">
        <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
          <h5 hidden className="text-2xl font-medium text-gray-600 lg:block">Habitually</h5>

          <div className="flex space-x-4">
            {/* <!--search bar --> */}
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                  <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                  </svg>
                </span>
                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 outline-none transition focus:border-cyan-300" />
              </div>
            </div>
            {/* <!--/search bar --> */}
            <button aria-label="search" className="h-10 w-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
              <svg xmlns="http://ww50w3.org/2000/svg" className="mx-auto w-4 fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
              </svg>
            </button>
            <button aria-label="chat" className="h-10 w-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </button>
            <button aria-label="notification" className="h-10 w-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>




    </nav>
  );
}

export default Header;

// this was in return before tailwind.css
// {!isAuth 
//   ? <>
//       <div class="mb-2 sm:mb-0">
//       {/* <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a> */}
//         <Link class="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/Login">Sign up</Link>
//       </div>

//     </>
//   : (
  //     // <>
  //     //   <Link to="/">Home</Link>
  //     //   <Link to="/Login">Sign In</Link>
  //     // </>
  //     <div>
  
  //         <div class="mb-2 sm:mb-0">
  //           <Link class="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/">Home</Link>
  //         </div>
  
  //           <Link class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/Login">Sign In</Link>
  
  
  //           {/* <SearchBar /> */}
  
  
  //     </div>
  
//     )}

// conditional render does not seem to be acknowledging when Authentication is true, which should show links for home and sign in