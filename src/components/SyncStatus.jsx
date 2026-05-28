export default function SyncStatus({ isSyncing, error, onRetry }) {
  if (isSyncing) {
    return <span className="text-[#346739] text-[10px] font-bold animate-pulse">Syncing...</span>;
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-red-500 text-[10px] font-medium">{error}</span>
        <button 
          onClick={onRetry}
          className="text-[#346739] underline text-[9px] font-bold uppercase"
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
}