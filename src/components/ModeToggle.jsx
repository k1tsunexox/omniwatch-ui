export default function ModeToggle({ currentMode, onModeChange }) {
  const nextMode = currentMode === 'clock' ? 'stopwatch' : 'clock';
  const label = currentMode === 'clock' ? 'Stopwatch ►' : '◄ Clock';

  return (
    <button
      onClick={() => onModeChange(nextMode)}
      className="bg-[#346739] text-[#F2EDC2] px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-[#79AE6F] transition-colors mb-4 shadow-sm"
    >
      {label}
    </button>
  );
}