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

    // if user is already signed in. replace monitorAuthState button with new button with new method directing them to Home
    <div className="LandingPage">
      <div>LandingPage</div>
      <h1>Welcome to Habitually!</h1>
      <h2>A place to track and manage your goals and progression.</h2>
      <div>
        <button className='authButton' onClick={monitorAuthState}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage