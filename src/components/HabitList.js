import { React, useState, useEffect } from "react";
import Habit from "./Habit";
import { collection, updateDoc, doc, get, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import PropTypes from "prop-types";

function HabitList(props){
  
  const { isOpen, setIsOpen } = props; // Will this be needed here? WIP
  const [isToggle, setIsToggle] = useState(() => false); // dev purposes/ will delete soon

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);

  const onHabitSelection = async (id)=> {
    // e.preventDefault();
    // const selectedHabit = usersCollectionRef.filter(doc.id === id)[0];

    setIsToggle(!isToggle);
    console.log("Toggle to habit.js successful");
    const idRef = doc(db, "user", id);
    console.log("idRef = " + idRef)
    const selectedHabit = await getDoc(idRef === id); // issue lies within here.... something here is not tapping into the db correctly
    // const selectedHabit = () => usersCollectionRef.get(users).filter(doc => doc.id === id)[0]; // WIP on this line. 
    console.log("selectedHabit success " + selectedHabit);
    console.log(selectedHabit);

  }
  const goTohabit = (e)=> {
    e.preventDefault();
    setIsToggle(!isToggle);
  }

  return(
    <div className="habitListView">
      <div className="render">
        {isToggle 
          ? <Habit /> 
          : <div className="habitLoop">
              <p>habitlist.js</p>
              <div className="row">
                {users.map((user) => {
                  return(

                      <div className="col mb-2">
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
        }
      </div>
      <div>
        <button onClick={goTohabit}>Go to habit.js</button>
      </div>
    </div>
  )
}

export default HabitList;
// either let home.js handle toggle to ind. habit.js so that you dont have two <habit> tags here. or
// 