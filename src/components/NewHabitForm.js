import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import { useFirestore } from 'react-redux-firebase';

function NewHabitForm(){
  // placeholder to initialize useFireStore()

  // placeholder for adding new habit values to firestore

  return(
    <React.Fragment>
      <h2>NewHabitForm Placeholder. </h2>
      <p>Will pass handler function to reusable form</p>
      <ReusableForm />
    </React.Fragment>
  );
}

export default NewHabitForm;