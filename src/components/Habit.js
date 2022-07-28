import { React } from "react";
import PropTypes from "prop-types";

function Habit(props){

  const { habitClicked, id, habitName, habitSummary, habitTimeFrame, createdAt } = props

  return(
    // the conatiner is being set in habitList.js 
    <section>
      {/* add nice spacing between list in HabitList view: md:col-span-2 sm:col-span-3 lg:col-span-1 ml-auto lg:py-2.5 2xl:w-[50%] mt-25 */}
      <ul className="">
        <li x-for="">
          {/* adds to the nice spacing when rendered back into HabitList.js: bg-white shadow-md rounded mb-4 flex flex-col */}
          <a  className="">
            <div className="">
              <div onClick={()=>habitClicked(id)} className=" items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                <h1>Id: {id}</h1>
                <h1>Habit: {habitName}</h1>
                <h1>Summary: {habitSummary}</h1>
                <h1>Goal date: {habitTimeFrame}</h1>
                <h1>Created: {createdAt}</h1>
                <div>
                  <div className="sr-only text-grey-darker">Habit Name</div>
                  <div className="">
                    {habitName}
                  </div>
                </div>
                <div>
                  <div className="sr-only text-grey-darker">Habit TimeFrame</div>
                  <div className="test-black">{habitTimeFrame}</div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}

{/* <div className="individualHabit">
  <div className="container1">
    <p>Individual Habit.js </p>
    <div onClick={()=>habitClicked(id)}> 
      <h1>Id: {id}</h1>
      <h1>Habit: {habitName}</h1>
      <h1>Summary: {habitSummary}</h1>
      <h1>Goal date: {habitTimeFrame}</h1>
    </div>
  </div>
</div> */}

Habit.propTypes = {
  id: PropTypes.string,
  habitName: PropTypes.string,
  habitSummary: PropTypes.string,
  habitTimeFrame: PropTypes.string,
  habitClicked: PropTypes.func
}

export default Habit;

