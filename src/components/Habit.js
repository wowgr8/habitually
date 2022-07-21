import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

function Habit(props){

  const { users, setUsers, } = props;
  // const usersCollectionRef = collection(db, "user");

  // useEffect(() => {
  //   const getUsers = async() => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }
  //   getUsers()
  // }, []);

  const { habitClicked, id, habitName, habitSummary, habitTimeFrame } = props

  return(
    <div className="individualHabit">
      <div className="container">
        <p>Individual Habit.js </p>
        {/* id is not being read in this component but when it returns back in the HabitList component, it is grabbing the id just fine. -WIP */}
        <div onClick={()=>habitClicked(id)}> 
          <h1>Id: {id}</h1>
          {console.log("test in habit.js - id: " + id)}
          <h1>Habit: {habitName}</h1>
          <h1>Summary: {habitSummary}</h1>
          <h1>Goal date: {habitTimeFrame}</h1>
        </div>
      </div>

    </div>
  );
}

Habit.propTypes = {
  id: PropTypes.string,
  habitName: PropTypes.string,
  habitSummary: PropTypes.string,
  habitTimeFrame: PropTypes.string,
  habitClicked: PropTypes.func
}

export default Habit;

