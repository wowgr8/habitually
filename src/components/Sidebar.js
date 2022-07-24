import React, {useState, useEffect} from "react";
import Habit from "./Habit";
import { collection, updateDoc, doc, get, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';
// import for habitlist if we choose to use

function SideBar(){
  // placeholder for function handling search
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, []);
  
  const onHabitSelection = async (id)=> {}

  return(
    <div className="sidebar">
      <h2>Sidebar placeholder</h2>
      <p>Will show list of Habits (perhaps via habitlist.js) at all times. Clicking on one will move you to the that habit via id.</p>
      <div className="row">
        {users.map((user) => {
          return(
            <div className="cardHabitSidebar">
              <div className="containerHabitSidebar">
                  <p>{user.habitName}</p>
                <hr></hr>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SideBar;