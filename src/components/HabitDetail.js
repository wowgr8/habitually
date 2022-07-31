import { React, useContext, useEffect, useState } from "react";
import { Context } from "../utils/Context";
import { useNavigate } from 'react-router-dom';


function HabitDetail(){
  const { selectedHabit, setSelectedHabit,  habitBody } = useContext(Context);
  const [newS, setS] = useState();
  const [newM, setM] = useState();
  const [newH, setH] = useState();
  const [newD, setD] = useState();

  //console.log(habitBody); // {habitSummary: 'Test', habitTimeFrame: ut, createdAt: ut, habitName: 'create'}
  //console.log(habitBody.habitTimeFrame);// ut {seconds: 1659294120, nanoseconds: 322000000}
  //console.log(habitBody.habitTimeFrame.seconds * 1000);// 1659294120000

  let interval;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(()=>{
    const countDown = () => {
      const eventDay = new Date(habitBody.habitTimeFrame.seconds * 1000); // returns obj.
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

    return()=>{
      clearInterval(interval);
    }
  }, []);

  // add this to useEffect return() => { clearInterval(interval) } // to unmount.

  let navigate = useNavigate();

  const editBtn = () => {
    navigate("/EditHabitForm");
  }
  
  const backButton = () => {
    setSelectedHabit();
    console.log(selectedHabit);
    navigate("/HabitList");
  }

  return(
  <div className="h-full ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" >
    <div className="h-full px-6 pt-6 2xl:container ">
      <div className=" rounded-lg border border-gray-200 shadow-md bg-white dark:bg-gray-800 px-8 pt-16 pb-18 mb-4  flex-col ">
        <div class="overflow-x-auto relative">
          <table class="w-full text-xl text-left text-white-500 ">
            <thead class="text-3xl text-gray-800 uppercase bg-white-50 dark:text-white ">
              <tr>
                <th scope="col" class="py-3 px-4">
                  DETAILS 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-700">
                <th scope="row" class="py-4 px-6 font-large text-gray-900 whitespace-nowrap font-bold dark:text-gray-400">
                  Id  
                </th>
                <td class="py-4 px-6 text-gray-400">
                  {selectedHabit}
                </td>
              </tr>
              <tr class="bg-gray-600">
                <th scope="row" class="py-4 px-6 font-large  font-bold text-gray-900 whitespace-nowrap dark:text-gray-400">
                  Name 
                </th>
                <td class="py-4 px-6 text-gray-400">
                  {habitBody.habitName}
                </td>
              </tr>
              <tr class="bg-gray-700">
                <th scope="row" class="py-4 px-6 font-large text-gray-900 whitespace-nowrap font-bold dark:text-gray-400">
                  Summary
                </th>
                <td class="py-4 px-6 text-gray-400">
                  {habitBody.habitSummary}
                </td>
              </tr>
              <tr class="bg-gray-600">
                <th scope="row" class="py-4 px-6 font-large text-gray-900 whitespace-nowrap font-bold dark:text-gray-400">
                  Created  
                </th>
                <td class="py-4 px-6 text-gray-400">
                  {new Date(habitBody.habitTimeFrame.seconds * 1000).toLocaleDateString("en-US")}
                </td>
              </tr>
            </tbody>
          </table>
            {/* text-center dark:bg-gray-800 dark:border-gray-700  */}
          <div class="w-full bg-gray rounded-lg shadow-md pt-10 text-white">
            <div class="py-3 px-4">PROGRESS</div>
            <table class="w-full text-sm text-left text-gray-400 ">
              <tbody >
                <tr class="bg-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap">
                      Seconds:
                    </th>
                    <td>
                      <h2 id="second"></h2>
                    </td>
                    <td>
                      <progress class="progress progress-success w-56" value={newS} max="100"></progress>
                    </td>
                </tr>
                <tr class="bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap">
                      Minutes:
                    </th>
                    <td>
                      <h2 id="minute"></h2>
                    </td>
                    <td>
                      <progress class="progress progress-success w-26" value={newM} max="100"></progress>
                    </td>
                </tr>
                <tr class="bg-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900  dark:text-gray-400 whitespace-nowrap">
                      Hours:
                    </th>
                    <td>
                      <h2 id="hour"></h2>
                    </td>
                    <td>
                      <progress class="progress progress-success w-26" value={newH} max="100"></progress>
                    </td>
                </tr>
                <tr class="bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap">
                      Days:
                    </th>
                    <td>
                      <h2 id="day"></h2>
                    </td>
                    <td>
                      <progress class="progress progress-success w-26 " value={newD} max="100"></progress>
                    </td>
                </tr>


              </tbody>
            </table>
            <table>
              <tbody className="flex justify-evently mt-6 gap-16 pl-56 mb-5 ">
                <button onClick={backButton} className="w-64 btn glass hover:bg-purple-900 border hover:text-black hover:shadow-lg hover:shadow-purple-500/50">Back to List</button>
                <button onClick={editBtn} className=" w-64 btn glass hover:bg-blue-800 border-black-800 hover:text-black hover:shadow-lg hover:shadow-blue-500/50">Edit</button>
              </tbody>
            </table>
          </div> 
        </div>
      </div>
    </div>
  </div>
  )
}


export default HabitDetail;