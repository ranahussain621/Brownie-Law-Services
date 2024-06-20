import React, { createContext, useContext, useState } from 'react';

const ActiveItemContext = createContext();

export const useActiveItem = () => useContext(ActiveItemContext);

export const ActiveItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  const setActive = (item) => setActiveItem(item);
  const resetActive = () => setActiveItem(null); 

  return (
    <ActiveItemContext.Provider value={{ activeItem, setActive, resetActive }}>
      {children}
    </ActiveItemContext.Provider>
  );
};
