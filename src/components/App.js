import './App.css';
import Home from './Home';
import Login from "./Login";
import Header from './Header';
import React, { useState } from "react";
import LandingPage from './LandingPage';
// import Material UI for styling
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import EditHabitForm from './EditHabitForm';
import NewHabitForm from './NewHabitForm';
import HabitList from './HabitList';
import SideBar from './Sidebar';



function App() {

  function initialAuth(){
    return false;
  }
  const [isAuth, setIsAuth] = useState(()=>initialAuth());
  //const [selectedHabit, setSelectedHabit] = useState(null);


  return (
    <Router>
      <div >
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <SideBar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route path="/Login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route path="/HabitList" element={<HabitList
                                                        //selectedHabit={selectedHabit} setSelectedHabit={setSelectedHabit} 
                                                        
                                                        />}/>
          <Route path ="/NewHabitForm" element={<NewHabitForm isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route path ="/EditHabitForm" element={<EditHabitForm isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route path ="/" element={<Home isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
