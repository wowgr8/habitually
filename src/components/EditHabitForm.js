import React from "react";
import ReusableForm from "./ReusableForm"; // If we choose to use
import PropTypes from "prop-types";
// import { useFirestore } from 'react-redux-firebase';

function EditHabitForm (){
  // placeholder for firestore reference
  
  // placeholder for any methods/handling submission of form
  // function to update habit --- WIP still
  // const updateHabit = async(id, habitName) => {
  //   const userDoc = doc(db, "user", id);
  //   const newFields = {habitName: "Test"};
  //   await updateDoc(userDoc, newFields);
  // }

  //WIP - ignore for now.
  //<button onClick={() => {updateHabit(user.habitName, user.habitSummary, user.habitTimeFrame)}}> Edit Habit </button>
  
  return(
    <React.Fragment>
      <h2>EditHabitForm/REUSABLEFORM placeholder</h2>
    </React.Fragment>
  )
}

// placeholder for any propTypes

export default EditHabitForm;