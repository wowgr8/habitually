import React from "react";
import PropTypes from "prop-types";
import Habit from "./Habit"; //Most likely not be necessary due to props

function HabitDetail(){
  // placeholder for deconstructed props

  return(
    <React.Fragment>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
        <div className="px-6 pt-6 2xl:container">
          <h2>HabitDetail placeholder</h2>
          <p>placeholder for details: HabitName, HabitID, HabitSummary, HabitTimeOpen, HabitTimeGoal, etc.</p>
        </div>
      </div>
    </React.Fragment>
  )

}

// PropTypes placeholder

export default HabitDetail;