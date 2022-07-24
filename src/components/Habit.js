import { React } from "react";
import PropTypes from "prop-types";

function Habit(props){

  const { habitClicked, id, habitName, habitSummary, habitTimeFrame } = props

  return(
    <div className="individualHabit">
      <div className="container1">
        <p>Individual Habit.js </p>
        <div onClick={()=>habitClicked(id)}> 
          <h1>Id: {id}</h1>
          <h1>Habit: {habitName}</h1>
          <h1>Summary: {habitSummary}</h1>
          <h1>Goal date: {habitTimeFrame}</h1>
        </div>
      </div>
    </div>
  );
}

Habit.propTypes = {
  id: PropTypes.string,
  habitName: PropTypes.string,
  habitSummary: PropTypes.string,
  habitTimeFrame: PropTypes.string,
  habitClicked: PropTypes.func
}

export default Habit;

