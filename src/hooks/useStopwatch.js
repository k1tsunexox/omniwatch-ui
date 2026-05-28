import { useReducer, useRef, useCallback } from 'react';
import { stopwatchReducer, initialState } from '../stopwatchReducer';

export function useStopwatch() {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    dispatch({ type: 'START' });
    intervalRef.current = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 10);
  }, []);

  const stop = useCallback(() => {
    dispatch({ type: 'STOP' });
    clearInterval(intervalRef.current);
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
    clearInterval(intervalRef.current);
  }, []);

  const lap = useCallback(() => {
    dispatch({ type: 'LAP' });
  }, []);

  return { 
    ...state, 
    start, 
    stop, 
    reset, 
    lap 
  };
}