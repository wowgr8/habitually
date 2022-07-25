import { React, useState, useEffect } from "react";
import ReusableForm from "./ReusableForm"; 
import { collection, updateDoc, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import PropTypes from "prop-types";

function EditHabitForm (props){
  const [newHabit, setNewHabit] = useState(() => "")
  const [newSummary, setNewSummary] = useState(() =>"")
  const [newTimeFrame, setNewTimeFrame] = useState(() =>"")
  // const [habits, setHabits] = useState([])

  const updateHabit = async(e, id) => {
    e.preventDefault();
    const newFields = {habitName: newHabit, 
                        habitSummary: newSummary, 
                        habitTimeFrame: newTimeFrame, 
                      }; 
    // setIsOpen(!isOpen);
    await updateDoc(doc(db, "user", id), newFields) // this method works when id is replaced with hardcoded id ("7wTfjkYOarXknMqthXug"). This should work as-is after implementation of habitlist->habit.js ***by id*** and edit button with handler to bring you to this component ***by id***
  }

  const deleteHabit = async(id) =>{
    const idRef = doc(db, "user", id);
    await deleteDoc(idRef);
  }
  
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
        <button onClick={()=>deleteHabit()}>
          Delete
        </button>
    </div>
  )
}

EditHabitForm.propTypes = { // Is this needed? Everything works fine if 38-40 are commented out - WIP
  setIsOpen: PropTypes.bool,
};

export default EditHabitForm;