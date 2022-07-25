import { React, useState, useEffect, useCallback } from "react";
import Habit from "./Habit";
import { collection, updateDoc, doc, get, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


function HabitList(props){
  
  const { isOpen, setIsOpen } = props; // Will this be needed here? WIP
  const [isToggle, setIsToggle] = useState(() => false); // dev purposes/ will delete soon
  const [selectedHabit, setSelectedHabit] = useState(null); // dev purposes/ will delete soon
  let navigate = useNavigate(); // To go to edithabit form via onHabitSelection()

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);




// with useCallback to extract the function outside useEffect
  const onHabitSelection = useCallback( async (id)=> {
    const idRef = doc(db, "user", id);
    const individualHabit = await getDoc(idRef);
    console.log(selectedHabit)
    console.log(selectedHabit)
    if (individualHabit.exists()) {
      setSelectedHabit(individualHabit); // save the values to selectedHabit so they can be passed and used in EdithabitForm.
      //console.log("Document data:", individualHabit.data());
      console.log("Document uid:", individualHabit.id); //returns uid successfully
      console.log(individualHabit.data(), "inhabitselection")
      // navigate("/EditHabitForm");
    } else {
      console.log("No such document!");
    }
  }, [selectedHabit])


  useEffect(() => {
    onHabitSelection()
    console.log(selectedHabit, "in useeffect", selectedHabit.data());

  },[selectedHabit]) // dependency could be [selectedHabit] if async function is used in useEffect?

  return(
    <div className="habitLoop">
      <p>habitlist.js</p>
      <div className="row">
        {users.map((user) => {
          return(
            <div className="cardHabit">
              <div className="containerHabit">
                <Habit
                  habitClicked={onHabitSelection}
                  id={user.id}
                  habitName={user.habitName}
                  habitSummary={user.habitSummary}
                  habitTimeFrame={user.habitTimeFrame}
                  />
                <hr></hr>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HabitList;

  // OG - kinda works... needs help from useEffect. Does not save selectedHabit as document. Always renders as null.
  // const onHabitSelection = async (id)=> {
  //   const idRef = doc(db, "user", id);
  //   const individualHabit = await getDoc(idRef);
  //   console.log(selectedHabit)
  //   console.log(selectedHabit)
  //   if (individualHabit.exists()) {
    //   setSelectedHabit(individualHabit); // save the values to selectedHabit so they can be passed and used in EdithabitForm.
  //     //console.log("Document data:", individualHabit.data());
  //     console.log("Document uid:", individualHabit.id); //returns uid successfully
  //     console.log(individualHabit.data(), "inhabitselection")
  //     // navigate("/EditHabitForm");
  //   } else {
  //     console.log("No such document!");
  //   }
  // }