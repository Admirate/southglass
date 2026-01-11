import { useEffect, useState } from "react";

export function useCountUp(target: number, start: boolean, duration = 600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; 

    let startValue = 0;
    const increment = target / (duration / 16);

    const counter = () => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target); 
        return;
      }

      setCount(Math.floor(startValue));
      requestAnimationFrame(counter);
    };

    requestAnimationFrame(counter);
  }, [start, target, duration]);

  return count;
}
