import React, { useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { Context } from '../utils/Context';

function SideBar(){

  const { users, setUsers, setIsAuth } = useContext(Context);
  const usersCollectionRef = collection(db, "user");
  
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);
  
  let navigate = useNavigate();

  const authSignOut = async (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      setIsAuth(false);
      navigate("/LandingPage");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("failed SignOut");
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  return(
    <div className="sidebarrr">
      <aside className= "fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border border-slate-800 bg-gray-900 px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="mx-10 px-6 py-4 w-52">   
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">HABITUALLY</h1>
          </div>
          <div className="mt-8 text-center">
            <img src="https://i.kym-cdn.com/entries/icons/original/000/011/365/GRUMPYCAT.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">User #1</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            {users.map((user) => {
              return(
                <li key={user.id}>
                  <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                      <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                      <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                    </svg>
                    <span  className="-mr-1 font-medium">{user.habitName}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-slate-800">
            <button onClick={authSignOut} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="group-hover:text-gray-700">Logout</span>
            </button>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;