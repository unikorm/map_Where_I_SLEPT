import React, { createContext, useContext, useState } from 'react';

const ActivePageContext = createContext();

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(null);

  const setActive = (page) => {
    setActivePage(page);
  };

  return (
    <ActivePageContext.Provider value={{ activePage, setActive }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export const useActivePage = () => {
  return useContext(ActivePageContext);
};
