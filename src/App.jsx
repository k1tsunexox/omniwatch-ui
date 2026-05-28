import { useState, useEffect } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle';
import StatRing from './components/StatRing';

// Import our new hooks and context!
import { useStopwatch } from './hooks/useStopwatch';
import { useStats } from './hooks/useStats';
import { useWatch } from './WatchContext';

function App() {
  const [time, setTime] = useState(new Date());
  const [currentMode, setCurrentMode] = useState('clock');
  
  // 1. Context Hook
  const { timeFormat } = useWatch();
  
  // 2. Stopwatch Hook
  const { elapsed, isRunning, lapTimes, start, stop, reset, lap } = useStopwatch();
  
  // 3. Stats Hook (Setting initial default values for the UI)
  const { stats, isSyncing, syncError, syncStats } = useStats({
    steps: 8432,
    calories: 420,
    heartRate: 72
  });

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); 
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E6D9] flex items-center justify-center p-4 font-sans">
      <WatchFrame>
        <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
        
        {currentMode === 'clock' ? (
          <div className="flex flex-col items-center justify-center w-full">
            <TimeDisplay 
              hours={time.getHours().toString().padStart(2, '0')} 
              minutes={time.getMinutes().toString().padStart(2, '0')} 
              seconds={time.getSeconds().toString().padStart(2, '0')} 
            />
            
            {/* Displaying our dynamic stats! */}
            <div className="flex gap-2 w-full justify-center mt-4">
              <StatRing label="Steps" value={stats.steps} color="border-[#346739]" />
              <StatRing label="Cals" value={stats.calories} color="border-[#79AE6F]" />
              <StatRing label="BPM" value={stats.heartRate} color="border-[#9FCB98]" />
            </div>
            
            {/* A quick mock sync button for Day 4 prep */}
            <button 
              onClick={syncStats}
              disabled={isSyncing}
              className="mt-6 bg-[#346739] text-[#F2EDC2] px-5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-[#79AE6F] transition-colors disabled:opacity-50"
            >
              {isSyncing ? 'Syncing...' : 'Sync Stats'}
            </button>
            {syncError && <span className="text-red-500 text-[10px] mt-1 font-medium">{syncError}</span>}
          </div>
        ) : (
          <StopwatchWidget 
            elapsed={elapsed} 
            isRunning={isRunning} 
            lapTimes={lapTimes}
            onStart={start}
            onStop={stop}
            onReset={reset}
            onLap={lap}
          />
        )}
      </WatchFrame>
    </div>
  );
}

export default App;