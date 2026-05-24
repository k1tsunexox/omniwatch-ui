import StatRing from './components/StatRing'
import TimeDisplay from './components/TimeDisplay'

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

          {/* Stopwatch */}
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
        </div>
      </div>
    </div>
  )
}

export default App