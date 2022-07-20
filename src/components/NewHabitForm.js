import { React, useState } from "react";
import ReusableForm from "./ReusableForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase'

function NewHabitForm(){
  const [newHabit, setNewHabit] = useState(() => "")
  const [newSummary, setNewSummary] = useState(() =>"")
  const [newTimeFrame, setNewTimeFrame] = useState(() =>"")

  const usersCollectionRef = collection(db, "user");

  const createUser = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, { habitName: newHabit, 
                                        habitSummary: newSummary, 
                                        habitTimeFrame: newTimeFrame 
                                      });
  }

  return(
    <div>
      <h2>ADD NEW HABIT </h2>      
      <ReusableForm 
        onSubmissionHandler = {createUser}
        buttonText="CREATE!"
        setNewHabit = {setNewHabit}
        setNewSummary = {setNewSummary}
        setNewTimeFrame = {setNewTimeFrame}
        />
    </div>
  );
}

export default NewHabitForm;