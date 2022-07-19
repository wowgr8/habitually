import { React } from "react";
import PropTypes from "prop-types";

function ReusableForm(props){

  // Deconstructed useState setNew's; being passed down from NewHabitForm.js
  const { setNewHabit, setNewSummary, setNewTimeFrame } = props;

  return(
    <div>
      <h2>Reusable Form:</h2>
      <p>Needs onSubmit e.handler, form tag w/ input tags for Habit values</p>
      <form onSubmit={(props.onSubmissionHandler)}>
        <input 
          type='text'
          name="habitName"
          placeholder="What habit are you trying to break or build?" onChange={(e) => {setNewHabit(e.target.value);}}/>
        <input 
          type='text'
          name="habitSummary"
          placeholder="Brief summary of why you're committing to this goal:" onChange={(e) => {setNewSummary(e.target.value);}}/>
        <input 
          type='text'
          name="habitTimeFrame"
          placeholder="What is your goal date?" onChange={(e) => {setNewTimeFrame(e.target.value);}}/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  );
}

ReusableForm.propTypes = {
  onSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
