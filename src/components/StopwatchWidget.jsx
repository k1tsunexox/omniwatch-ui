export default function StopwatchWidget({ elapsed, isRunning, lapTimes, onStart, onStop, onReset, onLap }) {
  const displayTime = (elapsed / 1000).toFixed(2);
  
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full mt-2">
      {/* Timer Text */}
      <span className={`text-5xl font-black tracking-tighter mb-6 transition-colors duration-300 ${isRunning ? 'text-[#79AE6F]' : 'text-[#346739]'}`}>
        {displayTime}
      </span>
      
      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={isRunning ? onStop : onStart} 
          className="bg-[#346739] text-[#F2EDC2] w-20 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#79AE6F] active:scale-95 transition-all shadow-md"
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button 
          onClick={isRunning ? onLap : onReset} 
          className="bg-[#9FCB98] text-[#346739] w-20 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#79AE6F] hover:text-[#F2EDC2] active:scale-95 transition-all shadow-md"
        >
          {isRunning ? 'Lap' : 'Reset'}
        </button>
      </div>

      {/* Laps List */}
      <div className="w-full h-28 overflow-y-auto flex flex-col items-center gap-1.5 scrollbar-hide pr-1">
        {lapTimes.length === 0 && (
          <span className="text-[#9FCB98] text-xs font-medium italic mt-4">No laps recorded</span>
        )}
        {lapTimes.map((lap, i) => (
          <div key={i} className="text-[#346739] text-xs font-bold bg-[#9FCB98]/30 w-5/6 text-center py-2 rounded-xl flex justify-between px-4">
            <span>LAP {i + 1}</span>
            <span>{(lap / 1000).toFixed(2)}s</span>
          </div>
        ))}
      </div>
    </div>
  );
}