import React, {useState} from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
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

  // temporarily here for dev purposes. WIll probably keep in sidebar
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
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 pt-6 2xl:container">
        <div className="bg-white shadow-md rounded px-8 pt-16 pb-18 mb-4 flex flex-col">
          <form onSubmit={authSignUp}>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                id="email" 
                type="text" 
                placeholder="email" />              
            </div>

            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
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


          <form onSubmit={authSignIn}>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                id="signinemail" 
                name='signinEmail'
                type="text" 
                placeholder="email" />              
            </div>

            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                id="signinpassword" 
                name='signinPassword'
                type="password" 
                placeholder="******************" />
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
              <button onSubmit={authSignIn} class="mt-4 text-sm" type="submit">
                <p >Already Have An Account? <span class="underline cursor-pointer"> Sign In</span>
                </p>
              </button>
            </div>
            {/* add these to form.... perhaps conditionally render em.... */}
            {/* <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div> */}
          </form>


          <form>
            <div className="flex items-center justify-between">
              <button onClick={authSignOut} className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" >Sign out</button>
            </div>
          </form>
        </div>
      </div>
    </div>




  );
}

export default Login;

// Pre-Tailwind
      // <div className="px-6 pt-6 2xl:container">
      //   <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 md:container md:mx-auto">
      //       <h1>Sign up</h1>
      //       <form onSubmit={authSignUp}>
      //         <input
      //           type='text'
      //           name='email'
      //           placeholder='email' />
      //         <input
      //           type='password'
      //           name='password'
      //           placeholder='Password' />
      //         <button type='submit'>Sign up</button>
      //       </form>
      //       <h1>Sign In</h1>
      //       <form onSubmit={authSignIn}>
      //         <input
      //           type='text'
      //           name='signinEmail'
      //           placeholder='email' />
      //         <input
      //           type='password'
      //           name='signinPassword'
      //           placeholder='Password' />
      //         <button type='submit'>Sign in</button>
      //       </form>
      //       <h1>Sign Out</h1>
      //       <button onClick={authSignOut}>Sign out</button>
      //     </div>
      // </div>