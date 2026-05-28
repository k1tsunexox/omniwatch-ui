function StatRing({ label, value, target, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-20 h-20 rounded-full
        border-[6px] ${color}
        flex items-center justify-center`}
      >
        <div
          className="w-14 h-14 rounded-full
          flex flex-col items-center justify-center"
        >
          <span
            className="text-sm font-medium
            text-[#967E76]"
          >
            {value}
          </span>

          <span
            className="text-[10px]
            tracking-wide text-[#B7C4CF]"
          >
            {label}
          </span>
        </div>
      </div>

      <span
        className="text-xs mt-2 text-[#967E76]"
      >
       {target}
      </span>
    </div>
  )
}

export default StatRing