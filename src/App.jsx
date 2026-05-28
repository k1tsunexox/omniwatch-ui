import { useState, useEffect } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle'; // Assuming this component exists from Day 1

function App() {
  const [time, setTime] = useState(new Date());
  const [currentMode, setCurrentMode] = useState('clock'); // New State

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <WatchFrame>
      <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
      
      {currentMode === 'clock' ? (
        <TimeDisplay 
          hours={time.getHours().toString().padStart(2, '0')} 
          minutes={time.getMinutes().toString().padStart(2, '0')} 
          seconds={time.getSeconds().toString().padStart(2, '0')} 
        />
      ) : (
        <StopwatchWidget />
      )}
    </WatchFrame>
  );
}
export default App;