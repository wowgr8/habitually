import React from "react";
import Habit from "./Habit";
import PropTypes from "prop-types";
// Here we import hooks functionality from both react-redux and react-redux-firebase.
//import {useSelector} from 'react-redux';                                                // allows us to extract data from a Redux store.
//import {useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';            // allows us to listen for changes to Firestore without using an HOC in a class component.
                                                                                        //isLoaded() and isEmpty() from react-redux-firebase allow us to check if a collection has been retrieved from Firestore.

function HabitList(){
  // placeholder for useFirestoreConnect (to specify which collection to listen for changes in Firestore)
  
  // placeholder for useSelector (to make state available from store)


  return(
    <React.Fragment>
      <h2>Placeholder for HabitList: will hold loop for all Habit.js's</h2>
      <p>This loop will return props to Habit.js components</p>
      <Habit />
    </React.Fragment>
  )
}

// placeholder for proptypes if we choose to hold any slice of state in redux

export default HabitList;
