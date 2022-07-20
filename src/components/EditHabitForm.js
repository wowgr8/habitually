import { React, useState, useEffect } from "react";
import ReusableForm from "./ReusableForm"; 
import { collection, updateDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase'
import PropTypes from "prop-types";

function EditHabitForm (props){
  const [newHabit, setNewHabit] = useState(() => "")
  const [newSummary, setNewSummary] = useState(() =>"")
  const [newTimeFrame, setNewTimeFrame] = useState(() =>"")

  const { isOpen, setIsOpen } = props;

  // const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");



  // placeholder for any methods/handling submission of form
  // const updateHabit = async( e, id) => {
  //   e.preventDefault();
  //   // const userDoc = doc(db, "user", id);
  //   const newFields = {habitName: newHabit, 
  //                       habitSummary: newSummary, 
  //                       habitTimeFrame: newTimeFrame, 
  //                       id: doc.id // Figure out if ID belongs here or elsewhere...
  //                     }; 
  //   await setDoc(usersCollectionRef, newFields);
  // }
  const updateHabit = async(e) => {
    e.preventDefault();
    const newFields = {habitName: newHabit, 
                        habitSummary: newSummary, 
                        habitTimeFrame: newTimeFrame, 
                        id: doc.id // Figure out if ID belongs here or elsewhere...
                      }; 
    await setDoc(doc(db, "user"), newFields)
  }

  //WIP - ignore for now.
  //<button onClick={() => {updateHabit(user.habitName, user.habitSummary, user.habitTimeFrame)}}> Edit Habit </button>
  
  return(
    <div>
      <h2>EditHabitForm/REUSABLEFORM placeholder</h2>
      <ReusableForm 
        onSubmissionHandler = {updateHabit}
        buttonText="UPDATE!"
        setNewHabit = {setNewHabit}
        setNewSummary = {setNewSummary}
        setNewTimeFrame = {setNewTimeFrame}
        />
    </div>
  )
}

EditHabitForm.propTypes = {
  setIsOpen: PropTypes.bool,
};

export default EditHabitForm;