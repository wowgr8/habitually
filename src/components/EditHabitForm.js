import { React, useState, useContext } from "react";
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
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
      <div className="px-6 pt-6 2xl:container">
        {/* could this use a div with line 30 styling? WIP */}
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
    </div>
  )
}

export default EditHabitForm;