import { useState } from 'react'
import StatRing from './components/StatRing'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'
import WatchFrame from './components/WatchFrame'

function App() {
  const [currentMode, setCurrentMode] = useState('dashboard')

  return (
    <div
      className="min-h-screen bg-[#EEE3CB]
      flex items-center justify-center"
    >
      <WatchFrame>
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

        {/* Mode Switch */}
        <div
          className="flex gap-2
          bg-[#EEE3CB]
          rounded-full
          p-1 mb-8"
        >
          <button
            onClick={() => setCurrentMode('dashboard')}
            className={`
              px-4 py-2 rounded-full text-xs tracking-wide
              transition-all duration-300
              ${
                currentMode === 'dashboard'
                  ? 'bg-[#B7C4CF] text-white'
                  : 'text-[#967E76]'
              }
            `}
          >
            DASHBOARD
          </button>

          <button
            onClick={() => setCurrentMode('stopwatch')}
            className={`
              px-4 py-2 rounded-full text-xs tracking-wide
              transition-all duration-300
              ${
                currentMode === 'stopwatch'
                  ? 'bg-[#D7C0AE] text-white'
                  : 'text-[#967E76]'
              }
            `}
          >
            STOPWATCH
          </button>
        </div>

        {/* Dashboard Mode */}
        {currentMode === 'dashboard' && (
          <>
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
          </>
        )}

        {/* Stopwatch Mode */}
        {currentMode === 'stopwatch' && (
          <StopwatchWidget />
        )}
      </WatchFrame>
    </div>
  )
}

export default App