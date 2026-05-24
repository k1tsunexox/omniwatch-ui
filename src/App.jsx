import StatRing from './components/StatRing'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'

function App() {
  return (
    <div
      className="min-h-screen bg-[#EEE3CB]
      flex items-center justify-center"
    >
      {/* Smartwatch Body */}
      <div
        className="w-[340px] min-h-[620px]
        rounded-[3.5rem]
        bg-[#2E2E2E]
        shadow-2xl
        p-4"
      >
        {/* Screen */}
        <div
          className="w-full h-full rounded-[3rem]
          bg-[#F8F5F0]
          px-6 py-8
          flex flex-col items-center"
        >
          {/* Date */}
          <div className="flex flex-col items-center mb-6">
            <span
              className="text-xs tracking-[0.4em]
              text-[#967E76]"
            >
              MONDAY
            </span>

            <span
              className="text-5xl font-light
              text-[#967E76]"
            >
              26
            </span>

            <span
              className="text-sm tracking-[0.2em]
              text-[#B7C4CF]"
            >
              MAY
            </span>
          </div>

          {/* Time Display */}
          <TimeDisplay
            time="10:42"
            period="AM"
          />

          {/* Stats */}
          <div className="flex gap-5 mb-10">
            <StatRing
              label="Steps"
              value="8,432"
              target="10,000"
              color="border-[#B7C4CF]"
            />

            <StatRing
              label="Calories"
              value="420"
              target="600"
              color="border-[#D7C0AE]"
            />

            <StatRing
              label="Heart"
              value="72"
              target="120"
              color="border-[#967E76]"
            />
          </div>

          {/* Stopwatch Widget */}
          <StopwatchWidget />
        </div>
      </div>
    </div>
  )
}

export default App