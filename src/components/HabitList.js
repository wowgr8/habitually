import React, { useEffect, useCallback, useContext } from "react";
import Habit from "./Habit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate, Link } from "react-router-dom";
import { Context } from '../utils/Context';

function HabitList(){
  
  const { selectedHabit, setSelectedHabit, 
          users, setUsers, setHabitBody
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

  const onHabitSelection = useCallback( async (id)=> {
    const idRef =  doc(db, "user", id);
    const individualHabit = await getDoc(idRef);
    if (individualHabit.exists()) {   
      setHabitBody(individualHabit.data());
      setSelectedHabit(individualHabit.id); 
    } else {
      console.log("No such document!");
    }
  }, [selectedHabit] )

  useEffect(() => {
    onHabitSelection();
    if (selectedHabit) { 
      navigate("/HabitDetail");
    } 
  },[onHabitSelection]) 
  
  return(
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" id="habitListDiv">
      <div className="px-12 ml-20">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/NewHabitForm">Add New Habit</Link>
          </span>
        </button>
      </div>
      <div className="px-6 pt-6 2xl:container flex flex-wrap grid grid-cols-2 ml-20 mr-20 gap-x-0">
        {users.map((user) => {
          return(
            <div className="p-6 mx-6 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-8 shadow-2xl outline outline-gray-800 hover:outline-blue-500 ">
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