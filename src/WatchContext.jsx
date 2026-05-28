import { createContext, useContext, useState } from 'react';

const WatchContext = createContext(null);

export function WatchProvider({ children }) {
  // Keeping your requested Sunnies theme as the default!
  const [theme, setTheme] = useState('sunnies');
  
  // Lazy initialization reading from localStorage as hinted by the manual
  const [timeFormat, setTimeFormat] = useState(() => 
    localStorage.getItem('timeFormat') || '12'
  );

  return (
    <WatchContext.Provider value={{ theme, setTheme, timeFormat, setTimeFormat }}>
      {children}
    </WatchContext.Provider>
  );
}

// Custom accessor hook required by the manual
export function useWatch() {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error('useWatch must be used inside a WatchProvider');
  }
  return context;
}