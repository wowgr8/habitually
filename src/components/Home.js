// Will be highest component holding state
import React from "react";
import Header from "./Header"; // Parent to searchbar.js & Login.js
import SideBar from "./SideBar"; // Parent to Habit.js
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
        <h1>This is the Home component rendering</h1>
        <p>Below are placeholders for each component</p>
        <Header />
        <SideBar />
        <EditHabitForm />
        <HabitDetail />
        <HabitList />
        <NewHabitForm />
      </React.Fragment>
    );
  }
}

// proptypes placeholder

// mapStateToProps placeholder if we choose to use it

export default Home; // withFirestore(Home) placeholder