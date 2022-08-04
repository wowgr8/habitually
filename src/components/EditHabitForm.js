import React, { useContext } from "react";
import ReusableForm from "./ReusableForm"; 
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import { Context } from '../utils/Context';
import { useNavigate } from "react-router-dom";

function EditHabitForm (){

  const { newHabit, setNewHabit,
          newSummary, setNewSummary,
          newTimeFrame, setNewTimeFrame,
          selectedHabit, setSelectedHabit,
        } = useContext(Context);

  let navigate = useNavigate();

  const updateHabit = async(e) => {
    e.preventDefault();
    const newFields = {habitName: newHabit, 
                        habitSummary: newSummary, 
                        habitTimeFrame: newTimeFrame, 
                      }; 
    await updateDoc(doc(db, "user", selectedHabit), {...newFields}) 
    setSelectedHabit(selectedHabit); 
  }

  const deleteHabit = async() =>{
    const idRef = doc(db, "user", selectedHabit);
    await deleteDoc(idRef);
    setSelectedHabit();
    navigate("/HabitList");
  }

  const backButton = () => {
    navigate("/HabitDetail");
  }
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
      <div className="px-6 pt-6 2xl:container">
        <div class="overflow-x-auto relative">
          <ReusableForm 
            onSubmissionHandler = {updateHabit}
            onDelete= {deleteHabit}
            onBack= {backButton}
            buttonText="UPDATE!"
            title="NEW DETAILS"
            setNewHabit = {setNewHabit}
            setNewSummary = {setNewSummary}
            setNewTimeFrame = {setNewTimeFrame}
            />
        </div>
      </div>
    </div>
  )
}

export default EditHabitForm;