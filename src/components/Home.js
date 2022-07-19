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
  // const [newHabit, setNewHabit] = useState(() =>"")
  // const [newSummary, setNewSummary] = useState(() =>"")
  // const [newTimeFrame, setNewTimeFrame] = useState(() =>"")
  // Either restructure collection in database so they are not nested or create a way to access nested collections. 
  const usersCollectionRef = collection(db, "user");



  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);

  // Was in REUSABLEFORM.js
  // const createUser = async (e) => {
    // setNewHabit(e.target.value);
    // setNewSummary(e.target.value);
    // setNewTimeFrame(e.target.value);
    // await addDoc(usersCollectionRef, { habitName: newHabit, habitSummary: newSummary, habitTimeFrame: newTimeFrame });
  // }
  // methods placeholder

  return(
    <div>
      {/* This div need to be moved to HabitList.js */}
      <div className="usersLoop">
        {users.map((user) => {
          return(
            <div className="habitCard">
              <div className="container">
                <h1>Id: {user.id}</h1>
                <h1>Habit: {user.habitName}</h1>
                <h1>Summary: {user.habitSummary}</h1>
                <h1>Goal date: {user.habitTimeFrame}</h1>
              </div>
              {/* {"MAYBE ADD ONCLICK BUTTON HERE FOR EDIT/UPDATEHABIT() from edithabitform.js "} */}
              <hr></hr>
            </div>
          )
        })}
      </div>

      <h1>This is the Home component rendering</h1>
      <p>Below are placeholders for each component</p>
      <Header />
      <Sidebar />
      <EditHabitForm />
      <HabitDetail />
      <HabitList />
      <NewHabitForm  />
    </div>
  );
}

// proptypes placeholder


export default Home;