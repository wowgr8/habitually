import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { collection } from "firebase/firestore";
// import { useFirestore } from 'react-redux-firebase';

function NewHabitForm(props){

    // const usersCollectionRef = collection(db, "user");
    //passed in onhandlecreate for button

  return(
    <React.Fragment>
      <h2>ADD NEW HABIT </h2>
      
      <ReusableForm 
        createUser = {props.createUser}
        />
      <p>Buttontext onSubmit placeholder</p>
    </React.Fragment>
  );
}

NewHabitForm.propTypes = {
  createUser: PropTypes.func
};

export default NewHabitForm;