import { React, useState, useEffect } from "react";
import ReusableForm from "./ReusableForm"; 
import { collection, updateDoc, doc, getDocs } from "firebase/firestore";
import { db } from '../firebase'

function EditHabitForm (){
  const [newHabit, setNewHabit] = useState(() => "")
  const [newSummary, setNewSummary] = useState(() =>"")
  const [newTimeFrame, setNewTimeFrame] = useState(() =>"")

  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "user");

  // useEffect(() => {
  //   const getUsers = async() => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }
  //   getUsers()
  // }, []);

  // placeholder for any methods/handling submission of form
  const updateHabit = async( e, id) => {
    e.preventDefault();
    const userDoc = doc(db, "user", id);
    const newFields = {habitName: newHabit, habitSummary: newSummary, habitTimeFrame: newTimeFrame};
    await updateDoc(userDoc, newFields);
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

// placeholder for any propTypes

export default EditHabitForm;