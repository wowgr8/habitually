import React, { useContext, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Context } from '../utils/Context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login(){ 
  let navigate = useNavigate();

  const { setSelectedHabit, setIsAuth } = useContext(Context);
  const [ render, setRender ] = useState(false);

  const authSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setSelectedHabit();
      navigate("/HabitList");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  const authSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setSelectedHabit();
      setIsAuth(true)
      navigate("/HabitList");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  const toggleView = ()=>{
    setRender(!render)
  }

  return(
    <div className="ml-auto mb-6  justify-center">
      <div className="px-80 py-20">
        <div className="shadow-md rounded px-8 pt-16 pb-18 mb-4 flex flex-col rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
          {render ?
          <form onSubmit={authSignIn}>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker dark:border-blue-500" 
                id="signinemail" 
                name='signinEmail'
                type="text" 
                placeholder="email" />              
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 dark:border-blue-500 " 
                id="signinpassword" 
                name='signinPassword'
                type="password" 
                placeholder="******************" />
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
                <button onSubmit={authSignIn} className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                  Sign In
                </button>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={toggleView} className="mt-4 text-sm" type="submit">
                <p >New? <span className="underline cursor-pointer"> Sign Up</span>
                </p>
              </button>
            </div>
          </form>
          : <>
          <form onSubmit={authSignUp}>
            <div className="mb-4 ">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker dark:border-blue-500 bg-gray-50 " 
                id="email" 
                type="text" 
                placeholder="email" />              
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 dark:border-blue-500" 
                id="password" 
                type="password" 
                placeholder="******************" />
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button onSubmit={authSignUp} className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                Sign up
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <button onClick={toggleView} className="mt-4 text-sm" type="submit">
              <p >Already Have An Account? <span className="underline cursor-pointer"> Sign In</span></p>
            </button>
          </div> 
          </>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;