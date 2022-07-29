import React, { useState, useContext } from "react";
import './App.css';
import Home from './Home';
import Login from "./Login";
import Header from './Header';
import LandingPage from './LandingPage';
import EditHabitForm from './EditHabitForm';
import NewHabitForm from './NewHabitForm';
import HabitList from './HabitList';
import SideBar from './Sidebar';
import { Context } from '../utils/Context';
import HabitDetail from "./HabitDetail";
import Garden from "./Garden";
// import Material UI for styling
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";




function App() {
  // Will this be need after all? If so, move to context.js
  // function initialAuth(){
  //   return false;
  // }
  // const { isAuth, setIsAuth } = useContext(Context); 

  return (
    <Router>
        {/* sidebar will need to render after auth is true. so it will need to be be moved into routes and then conditionally rendered  */}
        {/* ALSO LandingPage needs to be rendered first. */}
        <Header />
        <SideBar /> 
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/HabitList" element={<HabitList />}/>
          <Route path ="/NewHabitForm" element={<NewHabitForm />}/>
          <Route path ="/EditHabitForm" element={<EditHabitForm />}/>
          <Route path ="/HabitDetail" element={<HabitDetail />}/>
          <Route path="/Garden" element={<Garden />}/>
          <Route path ="/" element={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;
