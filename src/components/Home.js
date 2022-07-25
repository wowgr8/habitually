// Will be highest component holding state
import { React, useEffect, useState, isLoaded } from "react";
import Header from "./Header"; // Parent to searchbar.js & Login.js
import Sidebar from "./Sidebar"; // Parent to Habit.js
import HabitList from "./HabitList"; // Parent to Habit.js
import EditHabitForm from "./EditHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import NewHabitForm from "./NewHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import HabitDetail from "./HabitDetail";
import Habit from "./Habit";
import Login from "./Login";
import { db, auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { collection, getDocs, updateDoc, addDoc } from "firebase/firestore";
import LandingPage from "./LandingPage";

function Home({isAuth, setIsAuth}) {
  //This users/setUsers and userCollectionRef will need to be moved to HabitList.js
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(() => false); // Will handle toggling visible component - atm being passed into components as props.
  let navigate = useNavigate();


  return(
    <div >
      {!isAuth  
        ? (<>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
              <div class="px-6 pt-6 2xl:container">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <LandingPage />
                </div>
              </div>
            </div>
          </>)

        : ( <>
            <Sidebar />
            <div class="px-6 pt-6 2xl:container">
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isOpen 
                ? null
                : <HabitList setIsOpen={setIsOpen}
                              isOpen={isOpen}
                              />}
              </div>
            </div>

          </>)
      }
    </div>
  );
}

export default Home;



// used to be commented out in the return():
{/* <h1>This is the Home component rendering</h1>
<p>Below are placeholders for each component</p>
<Header />
<Sidebar />
<EditHabitForm />
<HabitDetail />
<HabitList /> */}