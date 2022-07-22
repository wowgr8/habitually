// Will be highest component holding state
import { React, useEffect, useState } from "react";
import Header from "./Header"; // Parent to searchbar.js & Login.js
import Sidebar from "./Sidebar"; // Parent to Habit.js
import HabitList from "./HabitList"; // Parent to Habit.js
import EditHabitForm from "./EditHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import NewHabitForm from "./NewHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import HabitDetail from "./HabitDetail";
import Login from "./Login";
import { db } from '../firebase';
import { collection, getDocs, updateDoc, addDoc } from "firebase/firestore";

function Home() {
  //This users/setUsers and userCollectionRef will need to be moved to HabitList.js
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(() => false); // Will handle toggling visible component - atm being passed into components as props.

  return(
    <div>
      {isOpen 
        ? <HabitList setIsOpen={setIsOpen}
                          isOpen={isOpen}/>
        : <Login  setIsOpen={setIsOpen}
                          isOpen={isOpen}/>
      }

      {/* <h1>This is the Home component rendering</h1>
      <p>Below are placeholders for each component</p>
      <Header />
      <Sidebar />
      <EditHabitForm />
      <HabitDetail />
      <HabitList /> */}
      
    </div>
  );
}

export default Home;