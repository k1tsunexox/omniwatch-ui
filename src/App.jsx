import { useState, useEffect, useCallback, useRef } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle';

function App() {
  // ==========================================
  // 1. CLOCK & MODE STATE
  // ==========================================
  const [time, setTime] = useState(new Date());
  const [currentMode, setCurrentMode] = useState('clock'); // 'clock' or 'stopwatch'

  // Clock Ticker Effect
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // ==========================================
  // 2. STOPWATCH STATE (Day 3 - useRef Update)
  // ==========================================
  const [displayedElapsed, setDisplayedElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  
  // Refs to prevent stale closures and unnecessary re-renders
  const intervalRef = useRef(null);
  const elapsedRef = useRef(0);

  // ==========================================
  // 3. STOPWATCH HANDLERS
  // ==========================================
  const handleStart = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    
    intervalRef.current = setInterval(() => {
      elapsedRef.current += 10;
      setDisplayedElapsed(elapsedRef.current);
    }, 10);
  }, [isRunning]);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    elapsedRef.current = 0;
    setDisplayedElapsed(0);
    setLapTimes([]);
  }, []);

  const handleLap = useCallback(() => {
    setLapTimes(prev => [...prev, elapsedRef.current]);
  }, []);

  // ==========================================
  // 4. RENDER
  // ==========================================
  return (
    <div className="min-h-screen bg-[#E8E6D9] flex items-center justify-center p-4 font-sans">
      <WatchFrame>
        <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
        
        {currentMode === 'clock' ? (
          <TimeDisplay 
            hours={time.getHours().toString().padStart(2, '0')} 
            minutes={time.getMinutes().toString().padStart(2, '0')} 
            seconds={time.getSeconds().toString().padStart(2, '0')} 
          />
        ) : (
          <StopwatchWidget 
            elapsed={displayedElapsed} 
            isRunning={isRunning} 
            lapTimes={lapTimes}
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            onLap={handleLap}
          />
        )}
      </WatchFrame>
    </div>
  );
}

export default App;