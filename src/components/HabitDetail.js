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
      const days = Math.floor(timeSpan / day);
      const hours = Math.floor((timeSpan % day) / hour);
      const minutes = Math.floor((timeSpan % hour) / minute);
      const seconds = Math.floor((timeSpan % minute) / second);

      let dayField = document.getElementById('day');
      let hourField = document.getElementById('hour');
      let minuteField = document.getElementById('minute');
      let secondField = document.getElementById('second');
      
      //console.log("Days: " + days,  " Hours: " +  hours, " Minutes: " +  minutes,  " Seconds: " +  seconds);
      dayField.innerHTML = days;
      hourField.innerHTML = hours;
      minuteField.innerHTML = minutes;
      secondField.innerHTML = seconds;
    }
  }
  interval = setInterval(countDown, second);


  // useEffect(()=> {
      


  // }, [day, hour, minute, second]);
    


  return(

      <div className="h-full ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
        <div className="h-full px-6 pt-6 2xl:container ">
          <div className="h-full  bg-white shadow-md rounded px-8 pt-16 pb-18 mb-4  flex-col ">
            <div class="overflow-x-auto relative">
              <table class="w-full text-lg text-left text-white-500 ">
                <thead class="text-lg text-gray-700 uppercase bg-white-50  ">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      DETAILS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Id  
                    </th>
                    <td class="py-4 px-6">
                      {selectedHabit}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Name 
                    </th>
                    <td class="py-4 px-6">
                      {habitBody.habitName}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Summary
                    </th>
                    <td class="py-4 px-6">
                      {habitBody.habitSummary}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Created  
                    </th>
                    <td class="py-4 px-6">
                      {new Date(habitBody.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")}
                    </td>
                  </tr>
                </tbody>
              </table>

                    <div className="">
                      <h2 id="day"></h2>
                      <p>:</p>
                      <h2 id="hour"></h2>
                      <p>:</p>
                      <h2 id="minute"></h2>
                      <p>:</p>
                      <h2 id="second"></h2>
                    </div>

                    
            </div>
          </div>
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