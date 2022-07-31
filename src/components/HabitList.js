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
          setNewTimeFrame,
          createToDate, setCreateToDate,
          tFToDate, setTFToDate
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
      console.log(individualHabit); // null on first run (successful), obj on second.
      console.log("individualHabit.id")
      console.log(individualHabit.id) // returns id
      setHabitBody(individualHabit.data());
      // setCreateToDate(new Date(individualHabit.createdAt.seconds * 1000).toLocaleDateString("en-US")); TypeError: Cannot read properties of undefined (reading 'seconds')
      setSelectedHabit(individualHabit.id); // null when useEffect runs the first time per click, true when useEffect runs the second time per click.
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
      console.log(createToDate)
      console.log("selected habit is undefined and it exists. Inside If.")
      // navigate("/EditHabitForm");
      navigate("/HabitDetail");
    } else {
      // if undefined, do this:
      console.log(selectedHabit)
      console.log("selectedHabit is undefined and does not exist. Inside else.")
    }
    console.log("End of useEffect()")
  },[onHabitSelection]) 
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" id="habitListDiv">
      <div className="px-12 ml-20">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/NewHabitForm">Add New Habit</Link>
          </span>
        </button>
      </div>
      <div className="px-6 pt-6 2xl:container flex flex-wrap grid grid-cols-2 ml-20 mr-20 gap-x-0">
        {users.map((user) => {
          return(
            <div class="p-6 mx-6 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-8 shadow-2xl outline outline-gray-800 hover:outline-blue-500 ">
                <Habit
                  habitClicked={onHabitSelection}  
                  id={user.id}
                  habitName={user.habitName}
                  habitSummary={user.habitSummary}
                  createdAt={new Date(user.createdAt.seconds * 1000).toLocaleDateString("en-US")}
                  habitTimeFrame={new Date(user.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")}
                  />
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