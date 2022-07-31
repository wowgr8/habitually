import React, {useEffect, useContext} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { Context } from '../utils/Context';
import backgroundH from "../img/sprout.gif";

function LandingPage() { //{isAuth, setIsAuth}

  const { isAuth, setIsAuth } = useContext(Context); 
  let navigate = useNavigate();


// for background, check out Arbitrary values section:  https://tailwindcss.com/docs/background-image

  // When button is clicked. and user is authorized It will take you to home.js otherwise it wil go to login.js
  const monitorAuthState = async (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if(user){
        // console.log(user.uid);
        setIsAuth(true);
        // console.log(isAuth + " in landpingPage.js");
        navigate("/");
      }
      else { 
        // console.log(isAuth);
        setIsAuth(false);
        console.log("Please sign in: " + isAuth);
        // console.log(isAuth);
        navigate("/Login");
      }
    })
  }

  useEffect(()=>setIsAuth(isAuth))



  return (
    <div
      class="bk_Img"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >

    <div id="landingPageDiv" className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 pt-6 2xl:container pb-44 mb-44 pl-32 pt-44">
        {/* fix form so that it is more responsive... remove column so it doesnt float right */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  bg-white ml-60 border-gray-200 dark:bg-gray-800 dark:border-gray-700 mt-10 "> 
            <div className="flex flex-col min-h-full">
              <div className="px-6 py-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="text-xl text-center">Welcome to Habitually!</div>
              </div>
              <div className="px-6 py-10 flex-grow justify-center">
                <p className="text-white-300 text-base">
                  A place to track and manage your goals and progression.
                </p>
              </div>
              <div className="px-5 py-3 border-t bg-gray-100 flex justify-end border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                {/* <button  class="btn-gradient-default text-gray-600 font-medium text-sm py-1 px-5 rounded mr-3">Cancel</button> */}
                <button onClick={monitorAuthState} className="btn-gradient-success bg-blue-500 text-white font-medium text-sm py-1 px-5 rounded">Get Started</button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  </div>
  )
}

export default LandingPage;


    //pre tailwind
    // if user is already signed in. replace monitorAuthState button with new button with new method directing them to Home
    // <div className="LandingPage">
    //   <div>LandingPage</div>
    //   <h1>Welcome to Habitually!</h1>
    //   <h2>A place to track and manage your goals and progression.</h2>
    //   <div>
    //     <button className='authButton' onClick={monitorAuthState}>Get Started</button>
    //   </div>
    // </div>


