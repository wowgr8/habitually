import { React, useState } from "react";
import PropTypes from "prop-types";

function ReusableForm(){

  const [newHabit, setNewHabit] = useState("")
  const [newSummary, setNewSummary] = useState("")
  const [newTimeFrame, setNewTimeFrame] = useState("")


  const createUser = async () => {
    
  }


  return(
    <div>
      <h2>Reusable form Placeholder. </h2>
      <p>Needs onSubmit e.handler, form tag w/ input tags for Habit values</p>
      {/* <input placeholder="Name..." onChange={(e) => {setNewHabit(e.target.value);}} /> */}
      <input placeholder="Habit Name..." onChange={(e) => {setNewHabit(e.target.value);}}/>
      <input placeholder="Habit Summary..." onChange={(e) => {setNewSummary(e.target.value);}}/>
      <input placeholder="How long to accomplish this goal?..." onChange={(e) => {setNewTimeFrame(e.target.value);}}/>
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

// placeholder for proptypes

export default ReusableForm;
