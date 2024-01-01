// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState('/'); // Replace with your actual context state

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
