import React from "react";
import Habit from "./Habit";
import PropTypes from "prop-types";

function HabitList(props){
  
  // These are drilled from home to here to Habit.js --- maybe eliminate prop drill with useContext or defining use state in Habit.js directly.
  // const { users, setUsers, } = props;

  //return(

  //   <React.Fragment>
  //     <h2>Placeholder for HabitList: will hold loop for all Habit.js's</h2>
  //     <h2>loop:</h2>
  //      <h2>user(id)
  //          <habit /> 
  //      </h2>
  //     <p>This loop will return props to Habit.js components</p>
  //     <Habit users={users} setUsers={setUsers} /> ---- Ignore this line. useEffect will be moved here though. 
  //   </React.Fragment>
  //)
}

// placeholder for proptypes if we choose to hold any slice of state in redux

export default HabitList;
