import React, {useEffect, useContext} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { Context } from '../utils/Context';
import backgroundH from "../img/sprout.gif";

function LandingPage() {

  const { isAuth, setIsAuth } = useContext(Context); 

  let navigate = useNavigate();

  const monitorAuthState = async (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsAuth(true);
        navigate("/HabitList");
      }
      else { 
        setIsAuth(false);
        navigate("/Login");
      }
    })
  }

  useEffect(()=>setIsAuth(isAuth))

  return (
    <div
      className="bk_Img"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
    <div id="landingPageDiv" className="ml-auto mb-6 lg:w-[75%]">
      <div className="px-6 pt-6 2xl:container pb-44 mb-44 pl-18 pt-44 justify-center">
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
              <button onClick={monitorAuthState} className="btn-gradient-success bg-blue-500 text-white font-medium text-sm py-1 px-5 rounded">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LandingPage;