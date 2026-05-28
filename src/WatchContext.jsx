import { createContext, useContext, useState, useEffect } from 'react';

const WatchContext = createContext(null);

export function WatchProvider({ children }) {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('omniTheme') || 'sunnies'
  );
  
  const [timeFormat, setTimeFormat] = useState(() => 
    localStorage.getItem('timeFormat') || '12'
  );

  useEffect(() => {
    localStorage.setItem('omniTheme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('timeFormat', timeFormat);
  }, [timeFormat]);

  return (
    <WatchContext.Provider value={{ theme, setTheme, timeFormat, setTimeFormat }}>
      {children}
    </WatchContext.Provider>
  );
}

export function useWatch() {
  const context = useContext(WatchContext);
  if (!context) throw new Error('useWatch must be used inside a WatchProvider');
  return context;
}