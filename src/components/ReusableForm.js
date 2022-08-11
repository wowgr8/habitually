import { React, useContext, useState } from "react";
import { Context } from '../utils/Context';
import PropTypes from "prop-types";
import { Timestamp } from "firebase/firestore";

function ReusableForm(props){

  const { setNewHabit, setNewSummary, setNewTimeFrame, selectedHabit, habitBody } = useContext(Context);

  return(
  <div className="">
    <div className="">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg shadow-md  border border-gray-200 ">
        <h3 className="pt-4 text-2xl text-center">{props.title}</h3>
        <form onSubmit={(props.onSubmissionHandler)} className="px-12 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-400" for="firstName">
                Name Your Habit
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-400 border rounded shadow appearance-none input input-bordered input-md focus:outline-none focus:shadow-outline pr-20 dark:border-blue-500"
                id="habitName"
                name="habitName"
                type="text"
                placeholder={ selectedHabit ? habitBody.habitName : "Habit Name" } 
                onChange={(e) => {setNewHabit(e.target.value);}}/>
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-400" for="lastName">
                Time Frame
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline input input-bordered dark:border-blue-500 input-md pl-20 dark:border-blue-500"
                id="habitTimeFrame"
                name="habitTimeFrame"
                type="datetime-local"
                placeholder={ selectedHabit ? habitBody.habitTimeFrame : "What is your goal date?" } 
                onChange={(e) => {setNewTimeFrame(Timestamp.fromDate(new Date(e.target.value)))}}/>
            </div>     
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-400" for="email">
              Summary
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline textarea textarea-info dark:border-blue-500"
              id="habitSummary"
              name="habitSummary"
              type="text"
              placeholder= { selectedHabit ? habitBody.habitSummary : "Why are you committing to this goal?"} 
              onChange={(e) => {setNewSummary(e.target.value);}}/>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white btn glass hover:text-black rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
              type="submit">{props.buttonText}</button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="   flex items-center justify-evenly gap-2     pb-4 ">
            <button onClick={()=>props.onDelete()} className="btn btn-wide w-96 hover:text-black glass hover:bg-red-600 focus:ring-4 focus:ring-red-300 -ml-10">
              Delete
            </button>
            <button onClick={()=>props.onBack()} className="btn btn-wide glass w-96 hover:bg-purple-700 border border-red-800 hover:text-black hover:shadow-lg hover:shadow-purple-500/50 -mr-10">
              Back
            </button>
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
  onBack: PropTypes.func,
  title: PropTypes.string
};

export default ReusableForm;