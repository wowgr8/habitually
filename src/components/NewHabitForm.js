import { React, useState } from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase'

function NewHabitForm(){
  const [newHabit, setNewHabit] = useState(() => "")
  const [newSummary, setNewSummary] = useState(() =>"")
  const [newTimeFrame, setNewTimeFrame] = useState(() =>"")

  const usersCollectionRef = collection(db, "user");

  //passed in onhandlecreate for button
  const createUser = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, { habitName: newHabit, habitSummary: newSummary, habitTimeFrame: newTimeFrame });
  }

  return(
    <div>
      <h2>ADD NEW HABIT </h2>
      
      <ReusableForm 
        createUser = {createUser}
        buttonText="CREATE!"
        setNewHabit = {setNewHabit}
        setNewSummary = {setNewSummary}
        setNewTimeFrame = {setNewTimeFrame}
        />
      <p>Buttontext onSubmit placeholder</p>
    </div>
  );
}

// NewHabitForm.propTypes = {
//   createUser: PropTypes.func
// };

export default NewHabitForm;