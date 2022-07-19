import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

function Habit(props){

  // const { users, setUsers, } = props;
  // const usersCollectionRef = collection(db, "user");

  // useEffect(() => {
  //   const getUsers = async() => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }
  //   getUsers()
  // }, []);

  // const handleChangingSelectedHabit = (id) => {
  //   const selectedHabit = usersCollectionRef.filter(users => users.id === id)[0];
  //   // this.setState({selectedKeg: selectedKeg});
  // }

  // return(
  //   <div>
  //     <h2>Habit placeholder</h2>
  //     <p>Place holder for habit details/properties display and onclick method prop</p>
  //     <div id ="cardNew">
  //       <div onClick = {() => handleChangingSelectedHabit(users.id)} >
  //         <h1>Habit: {users.habitName}</h1>
  //         <hr/>
  //         <h1>Id: {users.id}</h1>
  //         <h1>Summary: {users.habitSummary}</h1>
  //         <h1>Goal date: {users.habitTimeFrame}</h1>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Habit;