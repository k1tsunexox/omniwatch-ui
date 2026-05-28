export default function StatRing({ label, value, color }) {
  return (
    // Outer ring (the track) uses the soft mint green, and accepts the border color as a prop[cite: 3]
    <div className={`w-14 h-14 rounded-full bg-[#9FCB98] border-[3px] ${color} flex items-center justify-center shadow-sm`}>
      
      // Inner circle uses the cream background to cut out the center and create the "ring" look[cite: 3]
      <div className="w-10 h-10 rounded-full bg-[#F2EDC2] flex flex-col items-center justify-center">
        <span className="text-[#346739] text-[10px] font-bold leading-none">{value}</span>
        <span className="text-[#79AE6F] text-[7px] font-medium uppercase tracking-widest mt-[2px]">{label}</span>
      </div>
    </div>
  );
}