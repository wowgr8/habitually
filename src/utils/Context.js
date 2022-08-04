import React, { useState } from "react";
  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [ users, setUsers ] = useState([]);
  const [ selectedHabit, setSelectedHabit ] = useState();
  const [ newHabit, setNewHabit ] = useState(() => "")
  const [ newSummary, setNewSummary ] = useState(() =>"")
  const [ newTimeFrame, setNewTimeFrame ] = useState(() =>"")
  const [ isOpen, setIsOpen ] = useState();
  const [ isAuth, setIsAuth ] = useState(false);
  const [ habitBody, setHabitBody ] = useState();

  const [ selectedHabitId, setSelectedHabitId ] = useState(); // unused -WIP
  const [ createToDate, setCreateToDate ] = useState(); // to hold CreatedAT value after it's been converted to Date() from Timestamp
  const [ tFToDate, setTFToDate ] = useState(); // to hold HabitTimeFrame value after it's been converted to Date() from Timestamp


  return (
    <Context.Provider value={{ selectedHabit, setSelectedHabit, users, setUsers, 
                                newHabit, setNewHabit, newSummary, setNewSummary, 
                                newTimeFrame, setNewTimeFrame, isOpen, setIsOpen, 
                                habitBody, setHabitBody, isAuth, setIsAuth,
                                
                                selectedHabitId, setSelectedHabitId,
                                createToDate, setCreateToDate,
                                tFToDate, setTFToDate
                                }}>
      {children}
    </Context.Provider>
  );
};