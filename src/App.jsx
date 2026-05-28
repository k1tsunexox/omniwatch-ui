import { useState, useEffect } from 'react';
import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); // Cleanup
  }, []);

  return (
    <WatchFrame>
      <TimeDisplay 
        hours={time.getHours().toString().padStart(2, '0')} 
        minutes={time.getMinutes().toString().padStart(2, '0')} 
        seconds={time.getSeconds().toString().padStart(2, '0')} 
      />
    </WatchFrame>
  );
}
export default App;