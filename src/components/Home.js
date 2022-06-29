// Will be highest component holding state
import React from "react";
import Header from "./Header"; // Parent to searchbar.js
import Sidebar from "./Sidebar"; // Parent to Habit.js
import HabitList from "./HabitList"; // Parent to Habit.js
import EditHabitForm from "./EditHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import NewHabitForm from "./NewHabitForm"; // Parent to ReusableForm.js if we choose to use one.
import HabitDetail from "./HabitDetail";





class Home extends React.Component {
  //constructor placeholder

  // methods placeholder

  render(){
    // conditional between components placeholder






    return(
      <React.Fragment>
        <p>This is the Home component rendering</p>
      </React.Fragment>
    );
  }
}

// proptypes placeholder

// mapStateToProps placeholder if we choose to use it

export default Home; // withFirestore(Home) placeholder