import { useEffect, useRef } from 'react';

export default function HoverCard({ children }) {
  const divRef = useRef(null);
  const mainRef = useRef(null);
  function mouseMoveEvent(e) {
    const { x, y } = mainRef.current.getBoundingClientRect();
    mainRef.current.style.setProperty('--xx', e.clientX - x);
    mainRef.current.style.setProperty('--yy', e.clientY - y);
  }

  useEffect(() => {
    if (divRef) {
      divRef.current.addEventListener('mousemove', mouseMoveEvent);
    }
    return () => divRef.current?.removeEventListener('mousemove', mouseMoveEvent);
  }, [divRef]);

  return (
    <div ref={mainRef}>
      <div ref={divRef} className='shiny relative overflow-hidden p-4'>
        {children}
      </div>
    </div>
  );
}
