import { React, useContext, useState } from "react";
import { Context } from '../utils/Context';
import PropTypes from "prop-types";
import { Timestamp } from "firebase/firestore";


function ReusableForm(props){

  const { setNewHabit, setNewSummary, setNewTimeFrame, selectedHabit,  habitBody } = useContext(Context);

  return(
  <div className="">
    <div className="px-6 pt-6 2xl:container">
    {/*  add to div below?:px-8 pt-16 pb-18 mb-4 flex flex-col (from login styling)*/}
      <div class="bg-white shadow-md rounded ">
        <div class=" ">
          {/* <!-- Row --> I think this div below need to be cleaned up. w-full and flex may need to be removed*/}
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col -->  */}
              {/* <div
                class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
              ></div> */}
            {/* <!-- Col --> */}

            {/* div below could hold line 13 */}
            <div class="     ">
              <h3 class="pt-4 text-2xl text-center">Enter details!</h3>
              <form onSubmit={(props.onSubmissionHandler)} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                      Name Your Habit
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="habitName"
                      name="habitName"
                      type="text"
                      placeholder={ selectedHabit ? habitBody.habitName : "Habit Name" } 
                      onChange={(e) => {setNewHabit(e.target.value);}}/>
                  </div>
                  <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                      Time Frame
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="habitTimeFrame"
                      name="habitTimeFrame"
                      type="datetime-local"
                      placeholder={ selectedHabit ? habitBody.habitTimeFrame : "What is your goal date?" } 
                      onChange={(e) => {setNewTimeFrame(Timestamp.fromDate(new Date(e.target.value)))}}/>
                  </div>     
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Summary
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="habitSummary"
                    name="habitSummary"
                    type="text"
                    placeholder= { selectedHabit ? habitBody.habitSummary : "Why are you committing to this goal?"} 
                    onChange={(e) => {setNewSummary(e.target.value);}}/>
                </div>
                {/* placeholder for tracker visual representation... */}
                {/* <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">Please choose a password.</p>
                  </div>
                  <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                      Confirm Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div> */}
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit">{props.buttonText}</button>
                </div>
                <hr class="mb-6 border-t" />
                {/* PERHAPS import button delete and edit button here
                would need to conditionally render from habitlist onselectinghabit -> editHabitform to here
                 */}
                
                {/* <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>











  );
}

ReusableForm.propTypes = {
  onSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
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
