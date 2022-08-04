import React, { useContext } from "react";
import ReusableForm from "./ReusableForm";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from "react-router-dom";
import { Context } from '../utils/Context';

function NewHabitForm(){

  const { newHabit, newSummary, newTimeFrame } = useContext(Context);

  let navigate = useNavigate(); 
  const usersCollectionRef = collection(db, "user");
  const createUser = async (e) => {
    e.preventDefault(); 
    await addDoc(usersCollectionRef, {  habitName: newHabit, 
                                        habitSummary: newSummary, 
                                        habitTimeFrame : newTimeFrame, 
                                        createdAt: serverTimestamp()
                                      });
    navigate("/HabitList");
  }

  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
      <div className="px-6 pt-6 2xl:container"> 
        <ReusableForm 
          onSubmissionHandler = {createUser}
          buttonText="CREATE!"
          title="ADD NEW HABIT"
          />
      </div>
    </div>
  );
}

export default NewHabitForm;