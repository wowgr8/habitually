import React, { useState } from "react";
  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [ users, setUsers ] = useState([]);
  const [ selectedHabit, setSelectedHabit ] = useState();
  const [ newHabit, setNewHabit ] = useState(() => "")
  const [ newSummary, setNewSummary ] = useState(() =>"")
  const [ newTimeFrame, setNewTimeFrame ] = useState(() =>"")
  const [ isOpen, setIsOpen ] = useState();
  const [ isAuth, setIsAuth ] = useState();

  return (
    <Context.Provider value={{ selectedHabit, setSelectedHabit, users, setUsers, 
                                newHabit, setNewHabit, newSummary, setNewSummary, 
                                newTimeFrame, setNewTimeFrame, isOpen, setIsOpen, 
                                isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  );
};