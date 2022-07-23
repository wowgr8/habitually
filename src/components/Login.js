import React, {useState} from "react";
import { auth } from "../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login({isAuth, setIsAuth}){ 
  let navigate = useNavigate();

  // const [isAuth, setIsAuth] = useState();

  // sign up - new user
  const authSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setIsAuth(true);
      console.log("successfully signed up!");
      console.log(isAuth);
      console.log(user.uid);
      console.log(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("failed SignUp");
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  // sign in - existing user
  const authSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Welcome back!");
      setIsAuth(true);
      console.log(isAuth);
      console.log(user.uid);
      console.log(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("failed SignIn");
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  const authSignOut = async (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      setIsAuth(false);
      console.log(isAuth);
      console.log("Till next time!");
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
    <div className="App-login">
      <h1>Sign up</h1>
      <form onSubmit={authSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={authSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={authSignOut}>Sign out</button>
    </div>
  );
}

export default Login;