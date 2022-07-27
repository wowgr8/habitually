import React, { useState } from "react";
  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [selectedHabit, setSelectedHabit] = useState();

  return (
    <Context.Provider value={{ selectedHabit, setSelectedHabit }}>
      {children}
    </Context.Provider>
  );
};