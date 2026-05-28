import { useState, useEffect } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StopwatchWidget from './components/StopwatchWidget';
import ModeToggle from './components/ModeToggle';
import StatRing from './components/StatRing';

// Hooks
import { useStopwatch } from './hooks/useStopwatch';
import { useStats } from './hooks/useStats';
import { useWatch } from './WatchContext';

function App() {
  const [time, setTime] = useState(new Date());
  const [currentMode, setCurrentMode] = useState('clock');
  
  const { timeFormat } = useWatch();
  const { elapsed, isRunning, lapTimes, start, stop, reset, lap } = useStopwatch();
  
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
    <div className="min-h-screen bg-[#FCFBF7] flex items-center justify-center p-4 font-sans">
      <WatchFrame>
        
        {/* Toggle Button */}
        <div className="w-full flex justify-center z-50 relative mb-2">
          <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
        </div>
        
        {currentMode === 'clock' ? (
          <div className="flex flex-col items-center w-full">
            
            <TimeDisplay 
              hours={time.getHours().toString().padStart(2, '0')} 
              minutes={time.getMinutes().toString().padStart(2, '0')} 
              seconds={time.getSeconds().toString().padStart(2, '0')} 
            />
            
            {/* Stat Rings */}
            <div className="flex gap-2 w-full justify-center">
              <StatRing label="Steps" value={stats.steps} color="border-[#346739]" />
              <StatRing label="Cals" value={stats.calories} color="border-[#79AE6F]" />
              <StatRing label="BPM" value={stats.heartRate} color="border-[#9FCB98]" />
            </div>
            
            {/* Sync Button - Now pulled up into view! */}
            <div className="w-full flex flex-col items-center mt-5">
              <button 
                onClick={syncStats}
                disabled={isSyncing}
                className="bg-[#346739] text-[#F2EDC2] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#79AE6F] active:scale-95 transition-all shadow-md disabled:opacity-50"
              >
                {isSyncing ? 'Syncing...' : 'Sync Stats'}
              </button>
              
              {syncError && (
                <span className="text-red-500 text-[10px] mt-1 font-medium bg-red-100 px-2 py-0.5 rounded">
                  {syncError}
                </span>
              )}
            </div>

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