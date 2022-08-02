import  React, { useContext } from "react";
import Sidebar from "./Sidebar"; 
import HabitList from "./HabitList"; 
import { useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import { Context } from '../utils/Context';

function Home() {

  const { isAuth, isOpen } = useContext(Context); 
  let navigate = useNavigate();

  return(
    <div className="homeContainer ">
      {!isAuth  
        ?
          <LandingPage />
        : <>
            <Sidebar />
            <div>
              {isOpen 
                ? null
                : <HabitList />
                }
            </div>
          </>
      }
    </div>
  );
}

export default Home;