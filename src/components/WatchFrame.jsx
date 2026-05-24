function WatchFrame({ children }) {
  return (
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
        {children}
      </div>
    </div>
  )
}

export default WatchFrame