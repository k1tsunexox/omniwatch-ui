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

          {/* Time */}
          <div className="flex flex-col items-center mb-10">
            <span
              className="text-6xl font-light
              tracking-tight text-[#967E76]"
            >
              10:42
            </span>

            <span
              className="text-sm tracking-[0.3em]
              text-[#B7C4CF] mt-2"
            >
              AM
            </span>
          </div>

          {/* Stats */}
          <div className="flex gap-5 mb-10">
            {/* Steps */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full
                border-[6px] border-[#B7C4CF]
                flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-full
                  flex flex-col items-center justify-center"
                >
                  <span
                    className="text-sm font-medium
                    text-[#967E76]"
                  >
                    8,432
                  </span>

                  <span
                    className="text-[10px]
                    tracking-wide text-[#B7C4CF]"
                  >
                    Steps
                  </span>
                </div>
              </div>

              <span
                className="text-xs mt-2 text-[#967E76]"
              >
                / 10,000
              </span>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full
                border-[6px] border-[#D7C0AE]
                flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-full
                  flex flex-col items-center justify-center"
                >
                  <span
                    className="text-sm font-medium
                    text-[#967E76]"
                  >
                    420
                  </span>

                  <span
                    className="text-[10px]
                    tracking-wide text-[#B7C4CF]"
                  >
                    Calories
                  </span>
                </div>
              </div>

              <span
                className="text-xs mt-2 text-[#967E76]"
              >
                / 600
              </span>
            </div>

            {/* Heart Rate */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full
                border-[6px] border-[#967E76]
                flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-full
                  flex flex-col items-center justify-center"
                >
                  <span
                    className="text-sm font-medium
                    text-[#967E76]"
                  >
                    72
                  </span>

                  <span
                    className="text-[10px]
                    tracking-wide text-[#B7C4CF]"
                  >
                    Heart
                  </span>
                </div>
              </div>

              <span
                className="text-xs mt-2 text-[#967E76]"
              >
                / 120
              </span>
            </div>
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
                <span
                  className="text-xs text-[#967E76]"
                >
                  LAP 1 · 00:58.20
                </span>
              </div>

              <div
                className="rounded-full
                bg-[#D7C0AE]
                px-4 py-2"
              >
                <span
                  className="text-xs text-[#967E76]"
                >
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