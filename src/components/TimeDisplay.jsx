function TimeDisplay({ time, period }) {
  return (
    <div className="flex flex-col items-center mb-10">
      <span
        className="text-6xl font-light
        tracking-tight text-[#967E76]"
      >
        {time}
      </span>

      <span
        className="text-sm tracking-[0.3em]
        text-[#B7C4CF] mt-2"
      >
        {period}
      </span>
    </div>
  )
}

export default TimeDisplay