import { React } from "react";
import PropTypes from "prop-types";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db } from '../firebase'

function ReusableForm(props){
  // setNew's are being passed in through props from NEWHABITFORM>JS
  // const [newHabit, setNewHabit] = useState(() =>"")
  // const [newSummary, setNewSummary] = useState(() =>"")
  // const [newTimeFrame, setNewTimeFrame] = useState(() =>"")

  // const usersCollectionRef = collection(db, "user");

  // move this into home.js and pass as prop into this component.
  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { habitName: newHabit, habitSummary: newSummary, habitTimeFrame: newTimeFrame });
  // }
  // Deconstructed useState's from NewHabitForm.js
  const { setNewHabit, setNewSummary, setNewTimeFrame } = props;


  return(
    <div>
      <h2>Reusable Form:</h2>
      <p>Needs onSubmit e.handler, form tag w/ input tags for Habit values</p>
      {/* <input placeholder="What habit are you trying to break or build?" onChange={(e) => {setNewHabit(e.target.value);}}/>
      <input placeholder="Brief summary of why you're committing to this goal:" onChange={(e) => {setNewSummary(e.target.value);}}/>
      <input placeholder="What is your goal date?" onChange={(e) => {setNewTimeFrame(e.target.value);}}/>
      <button onClick={props.createUser}>Create User</button> */}
      <form onSubmit={(props.createUser)}>
        <input 
          type='text'
          name="habitName"
          placeholder="What habit are you trying to break or build?" onChange={(e) => {setNewHabit(e.target.value);}}/>
          {/* placeholder="What habit are you trying to break or build?" onChange={(e) => {setNewHabit(e.target.value);}} */}
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

// placeholder for proptypes
ReusableForm.propTypes = {
  createUser: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
