export default function TimeDisplay({ hours, minutes, seconds }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full mt-4">
      <div className="flex items-baseline">
        <span className="text-7xl font-black text-[#346739] tracking-tighter">
          {hours}:{minutes}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-[2px] w-8 bg-[#9FCB98] rounded-full"></div>
        <span className="text-[#79AE6F] text-sm font-bold tracking-[0.25em] uppercase">
          {seconds}S
        </span>
        <div className="h-[2px] w-8 bg-[#9FCB98] rounded-full"></div>
      </div>
    </div>
  );
}