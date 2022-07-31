import { React, useContext, useState } from "react";
import { Context } from '../utils/Context';
import PropTypes from "prop-types";
import { Timestamp } from "firebase/firestore";


function ReusableForm(props){

  const { setNewHabit, setNewSummary, setNewTimeFrame, selectedHabit, habitBody } = useContext(Context);

  return(
  <div className="">
    <div className="">
    {/*  add to div below?:px-8 pt-16 pb-18 mb-4 flex flex-col (from login styling)*/}


      <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg shadow-md  border border-gray-200 ">
              <h3 class="pt-4 text-2xl text-center">NEW DETAILS</h3>
              <form onSubmit={(props.onSubmissionHandler)} class="px-12 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-400" for="firstName">
                      Name Your Habit
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-400 border rounded shadow appearance-none input input-bordered input-md focus:outline-none focus:shadow-outline pr-20 dark:border-blue-500"
                      id="habitName"
                      name="habitName"
                      type="text"
                      placeholder={ selectedHabit ? habitBody.habitName : "Habit Name" } 
                      onChange={(e) => {setNewHabit(e.target.value);}}/>
                  </div>
                  <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-400" for="lastName">
                      Time Frame
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline input input-bordered dark:border-blue-500 input-md pl-20 dark:border-blue-500"
                      id="habitTimeFrame"
                      name="habitTimeFrame"
                      type="datetime-local"
                      placeholder={ selectedHabit ? habitBody.habitTimeFrame : "What is your goal date?" } 
                      onChange={(e) => {setNewTimeFrame(Timestamp.fromDate(new Date(e.target.value)))}}/>
                  </div>     
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-400" for="email">
                    Summary
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline textarea textarea-info dark:border-blue-500"
                    id="habitSummary"
                    name="habitSummary"
                    type="text"
                    placeholder= { selectedHabit ? habitBody.habitSummary : "Why are you committing to this goal?"} 
                    onChange={(e) => {setNewSummary(e.target.value);}}/>
                </div>
                {/* placeholder for tracker visual representation... */}
                {/* <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-400" for="password">
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">Please choose a password.</p>
                  </div>
                  <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-400" for="c_password">
                      Confirm Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div> */}
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white btn glass hover:text-black rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                    type="submit">{props.buttonText}</button>
                </div>
                <hr class="mb-6 border-t" />
                <div className="   flex items-center justify-evenly gap-2     pb-4 ">
                  <button onClick={()=>props.onDelete()} className="btn btn-wide w-96 hover:text-black glass hover:bg-red-600 focus:ring-4 focus:ring-red-300 -ml-10">
                    Delete
                  </button>
                  <button onClick={()=>props.onBack()} className="btn btn-wide glass w-96 hover:bg-purple-700 border border-red-800 hover:text-black hover:shadow-lg hover:shadow-purple-500/50 -mr-10">
                    Back
                  </button>
                  {/* add back to list/home btn */}
                </div>
              </form>



      </div>
    </div>
  </div>











  );
}

ReusableForm.propTypes = {
  onSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  onDelete: PropTypes.func,
  onBack: PropTypes.func
};

export default ReusableForm;
//  pre-tailwind
//      <h2>Reusable Form:</h2>
//      <p>Needs onSubmit e.handler, form tag w/ input tags for Habit values</p> 
    //  <form onSubmit={(props.onSubmissionHandler)}>
    //    <input 
      //     type='text'
      //     name="habitName"
      //     placeholder="What habit are you trying to break or build?" onChange={(e) => {setNewHabit(e.target.value);}}/>
      //   <input 
      //     type='text'
      //     name="habitSummary"
      //     placeholder="Brief summary of why you're committing to this goal:" onChange={(e) => {setNewSummary(e.target.value);}}/>
      //   <input 
      //     type='text'
      //     name="habitTimeFrame"
      //     placeholder="What is your goal date?" onChange={(e) => {setNewTimeFrame(e.target.value);}}/>
      //   <button type="submit">{props.buttonText}</button>
      // </form>







    //   <div className="reusableForm">
