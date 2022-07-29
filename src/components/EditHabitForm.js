import { React, useState, useContext, useEffect } from "react";
import ReusableForm from "./ReusableForm"; 
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import { Context } from '../utils/Context';
import { useNavigate } from "react-router-dom";

function EditHabitForm (){
  // const [newHabit, setNewHabit] = useState(() => "")
  // const [newSummary, setNewSummary] = useState(() =>"")
  // const [newTimeFrame, setNewTimeFrame] = useState(() =>"")
  const { newHabit, setNewHabit,
          newSummary, setNewSummary,
          newTimeFrame, setNewTimeFrame,
          selectedHabit, setSelectedHabit,
        } = useContext(Context);

  let navigate = useNavigate();


  const updateHabit = async(e) => {
    console.log(selectedHabit, "IN EDIT.js");
    e.preventDefault();
    const newFields = {habitName: newHabit, 
                        habitSummary: newSummary, 
                        habitTimeFrame: newTimeFrame, 
                      }; 
    await updateDoc(doc(db, "user", selectedHabit), {...newFields}) 
    setSelectedHabit(selectedHabit); // updates placeholders in reusable form.

    // call function which renders button to go back home(HabitLIst), giving the user the option to stay and edit the same habit once again.
    // setSelectedHabit(); Only needed if navigating back to HabitLIst.
    // navigate("/HabitList");
  }

  const deleteHabit = async() =>{
    const idRef = doc(db, "user", selectedHabit);
    await deleteDoc(idRef);
    setSelectedHabit();
    console.log(selectedHabit, "in delteHabit()")
    navigate("/HabitList");
  }

  const backButton = () => {
    navigate("/HabitDetail");
  }
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
      <div className="px-6 pt-6 2xl:container">
        {/* could this use a div with line 30 styling? WIP */}
        <div className="h-full  bg-white shadow-md rounded px-8 pt-16 pb-18 mb-4  flex-col ">
          <div class="overflow-x-auto relative">

            <ReusableForm 
              onSubmissionHandler = {updateHabit}
              onDelete= {deleteHabit}
              onBack= {backButton}
              buttonText="UPDATE!"
              setNewHabit = {setNewHabit}
              setNewSummary = {setNewSummary}
              setNewTimeFrame = {setNewTimeFrame}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditHabitForm;