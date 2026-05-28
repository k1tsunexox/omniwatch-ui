export const initialState = {
  isRunning: false,
  elapsed: 0,
  lapTimes: []
};

export function stopwatchReducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return initialState;
    case 'TICK':
      return { ...state, elapsed: state.elapsed + 10 }; 
    case 'LAP':
      return { ...state, lapTimes: [...state.lapTimes, state.elapsed] };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}