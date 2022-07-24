import { React, useState, useEffect } from "react";
import Habit from "./Habit";
import { collection, updateDoc, doc, get, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import PropTypes from "prop-types";

function HabitList(props){
  
  const { isOpen, setIsOpen } = props; // Will this be needed here? WIP
  const [isToggle, setIsToggle] = useState(() => false); // dev purposes/ will delete soon
  const [selectedHabit, setSelectedHabit] = useState(() => null); // dev purposes/ will delete soon

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
    const idRef = doc(db, "user", id);
    const docSnap = await getDoc(idRef);
    if (docSnap.exists()) {
      setSelectedHabit(docSnap.data());
      console.log("Document data:", docSnap.data());
      console.log(selectedHabit)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
    // idRef.then((habit) => { 
    //   const selectedHabit = {                     
    //     habitName: habit.get("habitName"),                
    //     habitSummary: habit.get("habitSummary"),          
    //     habitTimeFrame: habit.get("habitTimeFrame"),               
    //     id: habit.id
    //   }
    //   setSelectedHabit(selectedHabit);
    //   console.log(selectedHabit)
    // })
  }


  const goTohabit = (e)=> {
    e.preventDefault();
    setIsToggle(!isToggle);
  }

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
      <div>
        <button onClick={goTohabit}>Go to habit.js</button>
      </div>
    </div>
  )
}

export default HabitList;
// either let home.js handle toggle to ind. habit.js so that you dont have two <habit> tags here. or
// 






// This return works 07/23/22 but why are we rendering habit conditionally two times?
// we only need to see habit list with a loop and child component with habit key:values passed as props. 
// return(
//   <div className="habitListView">
//     <div className="render">
//       {isToggle 
//         ? <Habit /> 
//         : <div className="habitLoop">
//             <p>habitlist.js</p>
//             <div className="row">
//               {users.map((user) => {
//                 return(

//                     <div className="col mb-2">
//                       <Habit
//                         habitClicked={onHabitSelection}
//                         id={user.id}
//                         habitName={user.habitName}
//                         habitSummary={user.habitSummary}
//                         habitTimeFrame={user.habitTimeFrame}
//                         />
//                     <hr></hr>
//                     </div>
//                 )
//               })}
//             </div>
//           </div>
//       }
//     </div>
//     <div>
//       <button onClick={goTohabit}>Go to habit.js</button>
//     </div>
//   </div>
// )





// DOES NOT WORK
  // const onHabitSelection = async (id)=> {
  //   // e.preventDefault();
  //   // const selectedHabit = usersCollectionRef.filter(doc.id === id)[0];

  //   setIsToggle(!isToggle);
  //   console.log("Toggle to habit.js successful");
  //   const idRef = doc(db, "user", id);
  //   console.log("idRef = " + idRef)
  //   const selectedHabit = await getDoc(idRef === id); // issue lies within here.... something here is not tapping into the db correctly
  //   // const selectedHabit = () => usersCollectionRef.get(users).filter(doc => doc.id === id)[0]; // WIP on this line. 
  //   console.log("selectedHabit success " + selectedHabit);
  //   console.log(selectedHabit);
  // }