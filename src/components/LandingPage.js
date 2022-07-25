import React, {useEffect, useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

function LandingPage() { //{isAuth, setIsAuth}

  const [isAuth, setIsAuth] = useState();
  let navigate = useNavigate();




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
    <div className="LandingPage">
      <div className="ml-auto lg:py-2.5 2xl:w-[65%] mt-40 ml-90  my-30 justify-center">
        {/* <div className="space-y-6 rounded-xl border border-gray-200 bg-white py-8 px-6 "> */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white ml-60">
            <div className="flex flex-col min-h-full">
              <div className="px-6 py-4 border-b">
                <div className="text-xl text-center">Welcome to Habitually!</div>
              </div>
              <div className="px-6 py-10 flex-grow">
                <p className="text-gray-700 text-base">
                  A place to track and manage your goals and progression.
                </p>
              </div>
              <div className="px-5 py-3 border-t bg-gray-100 flex justify-end">
                {/* <button  class="btn-gradient-default text-gray-600 font-medium text-sm py-1 px-5 rounded mr-3">Cancel</button> */}
                <button onClick={monitorAuthState} className="btn-gradient-success bg-blue-500 text-white font-medium text-sm py-1 px-5 rounded">Get Started</button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>



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
  )
}

export default LandingPage
