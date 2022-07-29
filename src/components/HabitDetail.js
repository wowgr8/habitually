import { React, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../utils/Context";
import Habit from "./Habit"; //Most likely not be necessary due to props

function HabitDetail(){
  const { setNewHabit, setNewSummary, setNewTimeFrame, users, selectedHabit,  habitBody, createToDate } = useContext(Context);
  const [newS, setS] = useState();
  const [newM, setM] = useState();
  const [newH, setH] = useState();
  const [newD, setD] = useState();

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
      setD(dayField.innerHTML = days);
      setH(hourField.innerHTML = hours);
      setM(minuteField.innerHTML = minutes);
      setS(secondField.innerHTML = seconds);
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
              <table class="w-full text-xl text-left text-white-500 ">
                <thead class="text-3xl text-gray-800 uppercase bg-white-50  ">
                  <tr>
                    <th scope="col" class="py-3 px-6 center">
                      DETAILS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-red border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Id  
                    </th>
                    <td class="py-4 px-6 text-gray-500">
                      {selectedHabit}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Name 
                    </th>
                    <td class="py-4 px-6 text-gray-500">
                      {habitBody.habitName}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Summary
                    </th>
                    <td class="py-4 px-6 text-gray-500">
                      {habitBody.habitSummary}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      Created  
                    </th>
                    <td class="py-4 px-6 text-gray-500">
                      {new Date(habitBody.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")}
                    </td>
                  </tr>
                </tbody>
              </table>

              
                {/* text-center dark:bg-gray-800 dark:border-gray-700  */}
              <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 ">

                <h2 id="second"></h2>
                <progress class="progress progress-success w-56" value={newS} max="100"></progress>

                <h2 id="minute"></h2>
                <progress class="progress progress-success w-26" value={newM} max="100"></progress>

                <h2 id="hour"></h2>
                <progress class="progress progress-success w-26" value={newH} max="100"></progress>

                <div class="mb-1 text-base font-medium ">Days:</div> 
                <p id= "day"></p>
                <progress class="progress progress-success w-56" value={newD} max="100"></progress>

            
              </div> 
            </div>
          </div>
        </div>
      </div>
  )

}


export default HabitDetail;


{/* <div className="flex justify-between mb-1">
<span class="text-base font-medium text-blue-700">Days</span>
<span class="text-sm font-medium text-blue-700 dark:text-blue" id="day"></span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div className="flex justify-between mb-1">
<span class="text-base font-medium text-blue-700">Days</span>
<span class="text-sm font-medium text-blue-700 dark:text-blue" id="hour"></span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div className="flex justify-between mb-1">
<span class="text-base font-medium text-blue-700">Days</span>
<span class="text-sm font-medium text-blue-700 dark:text-blue" id="minute"></span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div className="flex justify-between mb-1">
<span class="text-base font-medium text-blue-700">Days</span>
<span class="text-sm font-medium text-blue-700 dark:text-blue" id="second"></span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div> */}