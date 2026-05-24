function StopwatchWidget() {
  return (
    <div
      className="w-full rounded-3xl
      bg-[#EEE3CB]
      px-5 py-5
      flex flex-col items-center"
    >
      <span
        className="text-xs tracking-[0.3em]
        text-[#967E76]"
      >
        STOPWATCH
      </span>

      <span
        className="text-4xl font-light
        text-[#967E76] mt-2"
      >
        01:23.45
      </span>

      {/* Laps */}
      <div className="flex gap-3 mt-5">
        <div
          className="rounded-full
          bg-[#D7C0AE]
          px-4 py-2"
        >
          <span className="text-xs text-[#967E76]">
            LAP 1 · 00:58.20
          </span>
        </div>

        <div
          className="rounded-full
          bg-[#D7C0AE]
          px-4 py-2"
        >
          <span className="text-xs text-[#967E76]">
            LAP 2 · 00:25.25
          </span>
        </div>
      </div>
    </div>
  )
}

export default StopwatchWidget