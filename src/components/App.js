import React from "react";
import './App.css';
import Home from './Home';
import Login from "./Login";
import Header from './Header';
import LandingPage from './LandingPage';
import EditHabitForm from './EditHabitForm';
import NewHabitForm from './NewHabitForm';
import HabitList from './HabitList';
import SideBar from './Sidebar';
import HabitDetail from "./HabitDetail";
import Garden from "./Garden";
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";

function App() {

  return (
    <Router>
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