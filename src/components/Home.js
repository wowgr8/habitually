// Will be highest component holding state
import { React, useEffect, useState } from "react";
import Header from "./Header"; // Parent to searchbar.js & Login.js
import Sidebar from "./Sidebar"; // Parent to Habit.js
import HabitList from "./HabitList"; // Parent to Habit.js
import EditHabitForm from "./EditHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import NewHabitForm from "./NewHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import HabitDetail from "./HabitDetail";
import { db } from '../firebase';
import { collection, getDocs, updateDoc, addDoc } from "firebase/firestore";

function Home() {
  //This users/setUsers and userCollectionRef will need to be moved to HabitList.js
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(() => false); // Will handle toggling visible component - atm being passed into components as props.

  // Temp moved this and useEffect into editHabitForm.js for dev purposes
  // const usersCollectionRef = collection(db, "user");

  // useEffect(() => {
  //   const getUsers = async() => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }
  //   getUsers()
  // }, []);

  return(
    <div>
      {isOpen 
        ? <EditHabitForm setIsOpen={setIsOpen}
                          isOpen={isOpen}/>
        // ? <div className="usersLoop">
        //     {users.map((user) => {
        //       return(
        //         <div className="habitCard">
        //           <div className="container">
        //             <h1>Id: {user.id}</h1>
        //             <h1>Habit: {user.habitName}</h1>
        //             <h1>Summary: {user.habitSummary}</h1>
        //             <h1>Goal date: {user.habitTimeFrame}</h1>
        //           </div>
        //           {/* {"MAYBE ADD ONCLICK BUTTON HERE FOR EDIT/UPDATEHABIT() from edithabitform.js "} */}
        //           <hr></hr>
        //         </div>
        //       )
        //     })}
        //   </div>

        : <NewHabitForm  setIsOpen={setIsOpen}
                          isOpen={isOpen}/>
      }
      {/* This div need to be moved to HabitList.js */}


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