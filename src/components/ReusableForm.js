import { React, useState } from "react";
import PropTypes from "prop-types";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase'

function ReusableForm(){
  // Will probably move these into home.js and "lift state"/ pass these in as props.
  const [newHabit, setNewHabit] = useState("")
  const [newSummary, setNewSummary] = useState("")
  const [newTimeFrame, setNewTimeFrame] = useState("")

  const usersCollectionRef = collection(db, "user");

  // move this into home.js and pass as prop into this component.
  const createUser = async () => {
    await addDoc(usersCollectionRef, { habitName: newHabit, habitSummary: newSummary, habitTimeFrame: newTimeFrame });
  }


  return(
    <div>
      <h2>Reusable Form:</h2>
      <p>Needs onSubmit e.handler, form tag w/ input tags for Habit values</p>
      {/* <input placeholder="Name..." onChange={(e) => {setNewHabit(e.target.value);}} /> */}
      <input placeholder="Habit Name..." onChange={(e) => {setNewHabit(e.target.value);}}/>
      <input placeholder="Habit Summary..." onChange={(e) => {setNewSummary(e.target.value);}}/>
      <input placeholder="How long to accomplish this goal?..." onChange={(e) => {setNewTimeFrame(e.target.value);}}/>
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

// placeholder for proptypes

export default ReusableForm;
