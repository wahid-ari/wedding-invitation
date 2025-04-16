import { useEffect, useRef } from 'react';
import CircleType from 'circletype';

export default function RoundedText() {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(1000);
  }, [circleInstance.current]);

  return <span ref={circleInstance}>WE INVITE YOU TO CELEBRATE</span>;
}
