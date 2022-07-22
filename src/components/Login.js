import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Login(){

  // placeholder for functions handling login, signup, and logout

  return(
    <React.Fragment>
      <h2>placeholder for onsubmit forms</h2>
      <form onSubmit={doSignUp}>
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
    </React.Fragment>
  );
}

export default Login;