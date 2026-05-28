import { useState, useEffect, useCallback, useRef, useReducer } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle';
import { stopwatchReducer, initialState } from './stopwatchReducer';

function App() {
  // ==========================================
  // 1. CLOCK & MODE STATE (Unchanged)
  // ==========================================
  const [time, setTime] = useState(new Date());
  const [currentMode, setCurrentMode] = useState('clock');

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); 
  }, []);

  // ==========================================
  // 2. STOPWATCH STATE (UPDATED TO useReducer)
  // ==========================================
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);
  
  // The interval ID still lives in a useRef because it is a side-effect handle, not data model state.
  const intervalRef = useRef(null);

  // ==========================================
  // 3. HANDLERS (UPDATED TO DISPATCH ACTIONS)
  // ==========================================
  const handleStart = useCallback(() => {
    dispatch({ type: 'START' });
    intervalRef.current = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 10);
  }, []); // Empty dependencies because handlers only call dispatch[cite: 1]

  const handleStop = useCallback(() => {
    dispatch({ type: 'STOP' });
    clearInterval(intervalRef.current);
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' });
    clearInterval(intervalRef.current);
  }, []);

  const handleLap = useCallback(() => {
    dispatch({ type: 'LAP' });
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
            elapsed={state.elapsed} 
            isRunning={state.isRunning} 
            lapTimes={state.lapTimes}
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