// Will be highest component holding state
import { React, useEffect, useState } from "react";
import Header from "./Header"; // Parent to searchbar.js & Login.js
import Sidebar from "./Sidebar"; // Parent to Habit.js
import HabitList from "./HabitList"; // Parent to Habit.js
import EditHabitForm from "./EditHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import NewHabitForm from "./NewHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import HabitDetail from "./HabitDetail";
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";

function Home() {
  //usestate placeholder
  const [users, setUsers] = useState([]);
  // Either restructure collection in database so they are not nested or create a way to access nested collections. 
  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);

  // methods placeholder

  return(
    <div>
      <div className="usersLoop">
        {users.map((user) => {
          return(
            <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Id: {user.id}</h1>
              <h1>Habit: {user.habitName}</h1>
              <h1>Summary: {user.habitSummary}</h1>
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
      <NewHabitForm />
    </div>
  );
}

// proptypes placeholder

// mapStateToProps placeholder if we choose to use it

export default Home; // withFirestore(Home) placeholder