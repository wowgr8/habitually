import { React, useState, useContext } from "react";
import ReusableForm from "./ReusableForm";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from '../utils/Context';

function NewHabitForm(){

  const { newHabit, setNewHabit,
          newSummary, setNewSummary,
          newTimeFrame, setNewTimeFrame
        } = useContext(Context);

  let navigate = useNavigate(); 
  const usersCollectionRef = collection(db, "user");
  const createUser = async (e) => {
    console.log(newTimeFrame)
    e.preventDefault(); 
    await addDoc(usersCollectionRef, {  habitName: newHabit, 
                                        habitSummary: newSummary, 
                                        habitTimeFrame : newTimeFrame, 
                                        createdAt: serverTimestamp()
                                      });
                          console.log(newTimeFrame);
    navigate("/HabitList");
  }

  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
      <div className="px-6 pt-6 2xl:container">
        <h2>ADD NEW HABIT </h2>      
        <ReusableForm 
          onSubmissionHandler = {createUser}
          buttonText="CREATE!"
          setNewHabit = {setNewHabit}
          setNewSummary = {setNewSummary}
          setNewTimeFrame = {setNewTimeFrame}
          />
      </div>
    </div>
  );
}

NewHabitForm.propTypes = {
  setIsOpen: PropTypes.bool,
};

export default NewHabitForm;