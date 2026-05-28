import { useState, useEffect, useCallback } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle';
import StatRing from './components/StatRing';

function App() {
  // ==========================================
  // 1. CLOCK & MODE STATE
  // ==========================================
  const [time, setTime] = useState(new Date());
  
  // App.jsx owns the mode state[cite: 2]
  const [currentMode, setCurrentMode] = useState('clock'); 

  // Clock Ticker Effect runs on mount[cite: 2]
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); 
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
        // Functional updater avoids stale closure in the interval[cite: 2]
        setElapsed(prev => prev + 10);
      }, 10);
    }
    // Cleanup on unmount[cite: 2]
    return () => clearInterval(interval);
  }, [isRunning]);

  // ==========================================
  // 3. STOPWATCH HANDLERS
  // ==========================================
  // Callbacks via useCallback to avoid unnecessary re-renders[cite: 2]
  const handleStart = useCallback(() => setIsRunning(true), []);
  const handleStop = useCallback(() => setIsRunning(false), []);
  
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setElapsed(0);
    setLapTimes([]);
  }, []);
  
  const handleLap = useCallback(() => {
    // Appends to array using spread operator[cite: 2]
    setLapTimes(prev => [...prev, elapsed]);
  }, [elapsed]);

  // ==========================================
  // 4. RENDER
  // ==========================================
 return (
    // Changed the background to a much lighter, airy warm white (bg-[#FCFBF7])
    <div className="min-h-screen bg-[#FCFBF7] flex items-center justify-center p-4 font-sans">
      <WatchFrame>
        
        {/* The Mode Toggle stays visible in both modes, placed at the top */}
        <div className="w-full flex justify-center z-50 relative mb-4">
          <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
        </div>
        
        {/* Conditional Rendering based on currentMode */}
        {currentMode === 'clock' ? (
          <div className="flex flex-col items-center justify-center w-full">
            <TimeDisplay 
              hours={time.getHours().toString().padStart(2, '0')} 
              minutes={time.getMinutes().toString().padStart(2, '0')} 
              seconds={time.getSeconds().toString().padStart(2, '0')} 
            />
            
            {/* Stat Rings */}
            <div className="flex gap-2 w-full justify-center mt-6">
              <StatRing label="Steps" value="8.4k" color="border-[#346739]" />
              <StatRing label="Cals" value="420" color="border-[#79AE6F]" />
              <StatRing label="BPM" value="72" color="border-[#9FCB98]" />
            </div>
          </div>
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
    </div>
  );
}

export default App;