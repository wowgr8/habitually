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



  // temp here to render habit list in return(), same with useEffect()
  const usersCollectionRef = collection(db, "user");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);


  const updateHabit = async(e, id) => {
    e.preventDefault();
    const newFields = {habitName: newHabit, 
                        habitSummary: newSummary, 
                        habitTimeFrame: newTimeFrame, 
                      }; 
    setIsOpen(!isOpen);
    await updateDoc(doc(db, "user", id), newFields) // this method works when id is replaced with hardcoded id ("7wTfjkYOarXknMqthXug"). This should work as-is after implementation of habitlist->habit.js ***by id*** and edit button with handler to bring you to this component ***by id***
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

      {/* This loop belongs in habitLIst. Temp here for dev purposes. */}
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
    </div>
  )
}

EditHabitForm.propTypes = {
  setIsOpen: PropTypes.bool,
};

export default EditHabitForm;