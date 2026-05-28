import { useState, useEffect, useCallback } from 'react';
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
  // 2. STOPWATCH STATE
  // ==========================================
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  // Stopwatch Ticker Effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // ==========================================
  // 3. STOPWATCH HANDLERS
  // ==========================================
  const handleStart = useCallback(() => setIsRunning(true), []);
  
  const handleStop = useCallback(() => setIsRunning(false), []);
  
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setElapsed(0);
    setLapTimes([]);
  }, []);
  
  const handleLap = useCallback(() => {
    setLapTimes(prev => [...prev, elapsed]);
  }, [elapsed]);

  // ==========================================
  // 4. RENDER
  // ==========================================
  return (
    <WatchFrame>
      {/* The Mode Toggle stays visible in both modes */}
      <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
      
      {/* Conditional Rendering based on currentMode */}
      {currentMode === 'clock' ? (
        <TimeDisplay 
          hours={time.getHours().toString().padStart(2, '0')} 
          minutes={time.getMinutes().toString().padStart(2, '0')} 
          seconds={time.getSeconds().toString().padStart(2, '0')} 
        />
      ) : (
        <StopwatchWidget 
          elapsed={elapsed} 
          isRunning={isRunning} 
          lapTimes={lapTimes}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
          onLap={handleLap}
        />
      )}
    </WatchFrame>
  );
}

export default App;