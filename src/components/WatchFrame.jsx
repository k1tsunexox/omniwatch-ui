export default function WatchFrame({ children }) {
  return (
    <div className="w-[300px] h-[380px] bg-[#346739] rounded-[3.5rem] p-3 shadow-2xl flex items-center justify-center relative border-4 border-[#79AE6F]/40">
      {/* The Cream Screen */}
      <div className="w-full h-full bg-[#F2EDC2] rounded-[2.8rem] flex flex-col items-center justify-start pt-6 pb-4 px-4 shadow-inner relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}