import { React, useState, useEffect, useCallback, useContext } from "react";
import Habit from "./Habit";
import { collection, doc, getDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate, Link } from "react-router-dom";
import EditHabitForm from "./EditHabitForm";
import { Context } from '../utils/Context';


function HabitList(){
  
  const { selectedHabit, setSelectedHabit, 
          users, setUsers,
          habitBody, setHabitBody,
          setNewTimeFrame
        } =useContext(Context);

  const usersCollectionRef = collection(db, "user");
  let navigate = useNavigate(); 

  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []); 

  //Uses useCallback to extract the function outside useEffect :source - https://devtrium.com/posts/async-functions-useeffect
  const onHabitSelection = useCallback( async (id)=> {
    const idRef =  doc(db, "user", id);
    const individualHabit = await getDoc(idRef);
    if (individualHabit.exists()) {   
      console.log("individualHabit");
      console.log(individualHabit); // null (successful)
      console.log("individualHabit.id")
      console.log(individualHabit.id) // returns id
      setSelectedHabit(individualHabit.id); // null when useEffect runs the first time per click, true when useEffect runs the second time per click.
      setHabitBody(individualHabit.data());
      console.log("selectedHabit");
    } else {
      console.log("No such document!");
    }
  }, [selectedHabit] )

  useEffect(() => {
    onHabitSelection();
    console.log("useEffect ", selectedHabit);
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
  },[onHabitSelection]) 
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" id="habitListDiv">
      <div className="px-6 pt-6 2xl:container">
        {/* Conditionally render this link and list if users.length !== 0, Else navigate to addNewHabitForm.js. */}
      <p><Link to="/NewHabitForm">Add New Habit</Link></p> 
        {users.map((user) => {
          return(
            <div className="px-6 pt-6 2xl:container">
                <Habit
                  habitClicked={onHabitSelection}
                  id={user.id}
                  habitName={user.habitName}
                  habitSummary={user.habitSummary}
                  createdAt={new Date(user.createdAt.seconds * 1000).toLocaleDateString("en-US")}
                  habitTimeFrame={new Date(user.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")} // returns 7/23/2022
                  // setNewTimeFrame(new Date(user.habitTimeFrame.seconds * 1000))  - ERROR cannot be an obj.
                  // Date.parse(JSON.stringify(new Date(user.habitTimeFrame.seconds * 1000))) - NAN
                  // Date.parse(new Date(user.habitTimeFrame.seconds * 1000))         -             returns 1658637060000
                  // JSON.stringify(new Date(user.habitTimeFrame.seconds * 1000))          -      returns  "2022-04-21T07:00:00.000Z"
                  
                  />
                <hr></hr>
                  {console.log(user.habitTimeFrame, " = ut {seconds: 1650524400, nanoseconds: 0}")} 
                  {console.log(user.habitTimeFrame.seconds * 1000, " = 1650524400000 MAYBE YOU CAN DO a conditional based off this Int. if Date().now is > thisNum then get pokemon... You'll have to keep them as toLocalDateString, reverse engeneer them w/ newDate /1000?? to compare them.")}
                  {console.log(               new Date(user.habitTimeFrame.seconds * 1000), " = Thu Apr 21 2022 00:00:00 GMT-0700 (Pacific Daylight Time) ERROR, objects are not valid as React child.")} 
                  {console.log(JSON.stringify(new Date(user.habitTimeFrame.seconds * 1000)), " = '2022-04-21T07:00:00.000Z'")}
                  {console.log(new Date(user.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US"), " = 4/21/2022 : this will do for now.")}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default HabitList;

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