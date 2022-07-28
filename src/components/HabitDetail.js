import { React, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../utils/Context";
import Habit from "./Habit"; //Most likely not be necessary due to props

function HabitDetail(){
  const { setNewHabit, setNewSummary, setNewTimeFrame, users, selectedHabit,  habitBody, createToDate } = useContext(Context);

  //console.log(habitBody); // {habitSummary: 'Test', habitTimeFrame: ut, createdAt: ut, habitName: 'create'}
  //console.log(habitBody.habitTimeFrame);// ut {seconds: 1659294120, nanoseconds: 322000000}
  //console.log(habitBody.habitTimeFrame.seconds * 1000);// 1659294120000




    let interval;
    const eventDay = new Date(habitBody.habitTimeFrame.seconds * 1000); // returns obj.
    // defining second minute hour and day
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countDown = () => {
      let now = new Date() /1 ;
      let timeSpan = eventDay - now;
      if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(interval);
        return;
      } else {
        const days = Math.floor(timeSpan / day)
        const hours = Math.floor((timeSpan % day) / hour)
        const minutes = Math.floor((timeSpan % hour) / minute)
        const seconds = Math.floor((timeSpan % minute) / second)
      
        console.log("Days: " + days,  " Hours: " +  hours, " Minutes: " +  minutes,  " Seconds: " +  seconds);
      }
    }
    interval = setInterval(countDown, second);
    


  return(
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
        <div className="px-6 pt-6 2xl:container">
          <h2>HabitDetail placeholder</h2>
                <h1>Id: {selectedHabit}</h1>
                <h1>Habit: {habitBody.habitName}</h1>
                <h1>Summary: {habitBody.habitSummary}</h1>
                <h1>Goal date: {new Date(habitBody.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")}</h1>
                <h1>Created date: {new Date(habitBody.createdAt.seconds * 1000).toLocaleDateString("en-US")}</h1>
        </div>
      </div>
  )

}


export default HabitDetail;


// ignore last console.log.. this return a totally dif date
// function checktime(){
//   let now = new Date() /1 ;
//   let hTF = habitBody.habitTimeFrame.seconds * 1000; 
//   let ans = hTF - now ;
//   console.log(ans)
//   if( ans <= 0){
//     console.log("You did it!!")
//     //return "You did it!"
//   } else {
//     const arraydigits = Array.from(String(ans), Number); // returns array
//     console.log(arraydigits);
//     const newAns = arraydigits.push("0000");
//     console.log("Newans", arraydigits,);
//     let finalans = +arraydigits.join("") // returns 2493391240000
//     console.log(finalans)
//     //console.log("You have ", new Date(finalans *1000).toLocaleDateString("en-US"), " left to go!"); // invalid date... // if .second ommited = 6/3/1994 
//   }
//   checktime()