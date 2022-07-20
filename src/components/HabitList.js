import { React, useState, useEffect } from "react";
import Habit from "./Habit";
import { collection, updateDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import PropTypes from "prop-types";

function HabitList(props){
  
  const { isOpen, setIsOpen } = props; // Will this be needed here? WIP

  const usersCollectionRef = collection(db, "user");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);

  return(

  //   <React.Fragment>
  //     <h2>Placeholder for HabitList: will hold loop for all Habit.js's</h2>
  //     <h2>loop:</h2>
  //      <h2>user(id)
  //          <habit /> 
  //      </h2>
  //     <p>This loop will return props to Habit.js components</p>
  //     <Habit users={users} setUsers={setUsers} /> ---- Ignore this line. useEffect will be moved here though. 
  //   </React.Fragment>
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
  )
}

// placeholder for proptypes if we choose to hold any slice of state in redux

export default HabitList;
