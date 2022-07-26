import { React, useState, useEffect, useCallback, useLayoutEffect } from "react";
import Habit from "./Habit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from "react-router-dom";
import EditHabitForm from "./EditHabitForm";


function HabitList(){
  
  const [selectedHabit, setSelectedHabit] = useState(); // dev purposes/ will delete soon
  let navigate = useNavigate(); // To go to edithabit form via onHabitSelection()

  // Render all habits upon rendering page. 
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []); // usersCollectionRef should be added? Doesnt seem to hurt. Check again when creating and deleting habits.





//Uses useCallback to extract the function outside useEffect :source - https://devtrium.com/posts/async-functions-useeffect
  const onHabitSelection = useCallback( async (id)=> {
    const idRef =  doc(db, "user", id);
    const individualHabit = await getDoc(idRef);
    if (individualHabit.exists()) {   
      console.log("individualHabit");
      console.log(individualHabit); // null
      console.log("individualHabit.id")
      console.log(individualHabit.id) // returns id
      setSelectedHabit(individualHabit.id); // save the values to selectedHabit so they can be passed and used in EdithabitForm.
      console.log("selectedHabit");
      // navigate("/EditHabitForm");
    } else {
      console.log("No such document!");
    }
  }, [selectedHabit] )



  useEffect(() => {
    onHabitSelection();
    console.log("useEffect ", selectedHabit);
    // navigate("/EditHabitForm");
    if (selectedHabit) { // in the beginning, this starts out as `undefined`, which is the same thing as `false`
      // If defined, do this:
      console.log(selectedHabit)
      console.log("selected habit is undefined and it exists. Inside If.")
      navigate("/EditHabitForm");
      console.log("After /EditHabitForm")
    } else {
      // if undefined, do this:
      console.log(selectedHabit)
      console.log("selectedHabit is undefined and does not exist. Inside else.")
    }
    console.log("End of useEffect()")
  },[onHabitSelection]) // dependency could be [selectedHabit] if async function is used in useEffect?





  return(
    <div className="habitLoop">
      <div className="h-full space-y-6 rounded-xl border border-gray-200 bg-white py-8 px-6 2xl:w-[95%]">
        {users.map((user) => {
          return(
            <div>
                <Habit
                  habitClicked={onHabitSelection}
                  id={user.id}
                  habitName={user.habitName}
                  habitSummary={user.habitSummary}
                  habitTimeFrame={user.habitTimeFrame}
                  />
                <hr></hr>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HabitList;

  // async func within useEffect. and useEffect with state dependency below.
  // useEffect(()=>{
  //   const onHabitSelection = async(id ) => {
  //     const idRef = doc(db, "user", id);
  //     const individualHabit = await getDoc(idRef);
  //     if (individualHabit.exists()) { 
  //       return individualHabit
  //     }
  //   } 
  //   onHabitSelection()
  // }, [])

  // useEffect(() => {
  //   onHabitSelection()
  //   console.log("useEffect");

  // },[selectedHabit]) // also tried onHabitSelection as dependency. Problem here is I havent thought of a way to call onHabitSelection w/ onClick due to scope.





  // Pre-Tailwind
  // <p>habitlist.js</p>
  // <div className="row">
  //   {users.map((user) => {
  //     return(
  //       <div className="cardHabit">
  //         <div className="containerHabit">
  //           <Habit
  //             habitClicked={onHabitSelection}
  //             id={user.id}
  //             habitName={user.habitName}
  //             habitSummary={user.habitSummary}
  //             habitTimeFrame={user.habitTimeFrame}
  //             />
  //           <hr></hr>
  //         </div>
  //       </div>
  //     )
  //   })}
  // </div>