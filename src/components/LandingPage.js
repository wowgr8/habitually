import React, {useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

function LandingPage() {

  const [isAuth, setIsAuth] = useState(()=> false);
  let navigate = useNavigate();


  // When button is clicked. It will take you to login.js
  const monitorAuthState = async (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log(user.uid);
        setIsAuth(true);
        navigate("/");
      }
      else {
        console.log("Please sign in");
        navigate("/Login");
      }
    })
  }



  return (
    <div className="LandingPage">
      <div>LandingPage</div>
      <p>Welcome to Habitually!</p>
      <h1>A place to track and manage your goals and progression.</h1>
      <h1>A place to track and manage your goals and progression.</h1>
      <button className='authButton' onClick={monitorAuthState}>Get Started</button>
    </div>
  )
}

export default LandingPage