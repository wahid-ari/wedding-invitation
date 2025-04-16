import { useEffect, useRef } from 'react';

export default function HoverPrespective({ children }) {
  const cardRef = useRef(null);
  let X,
    Y = 0;

  function mouseMoveEvent(e) {
    let w = cardRef.current?.clientWidth;
    let h = cardRef.current?.clientHeight;
    let b = cardRef.current?.getBoundingClientRect();
    // console.log("mousemove")
    // console.log("W : ", w)
    // console.log("H : ", h)
    // console.log("B : ", b)
    X = (e.clientX - b?.left) / w;
    Y = (e.clientY - b?.top) / h;
    // console.log("X : ", X);
    // console.log("Y : ", Y);
    let rX = -(X - 0.5) * 10;
    let rY = (Y - 0.5) * 10;
    let bgX = 40 + 20 * X;
    let bgY = 40 + 20 * Y;
    document.documentElement.style.setProperty('--x', 100 * X + '%');
    document.documentElement.style.setProperty('--y', 100 * Y + '%');
    document.documentElement.style.setProperty('--bg-x', bgX + '%');
    document.documentElement.style.setProperty('--bg-y', bgY + '%');
    document.documentElement.style.setProperty('--r-x', rX + 'deg');
    document.documentElement.style.setProperty('--r-y', rY + 'deg');
  }

  function mouseLeaveEvent(e) {
    // console.log('mouseleave');
    document.documentElement.style.removeProperty('--x');
    document.documentElement.style.removeProperty('--y');
    document.documentElement.style.removeProperty('--bg-x');
    document.documentElement.style.removeProperty('--bg-y');
    document.documentElement.style.removeProperty('--r-x');
    document.documentElement.style.removeProperty('--r-y');
  }

  useEffect(() => {
    if (cardRef) {
      cardRef.current.addEventListener('mousemove', mouseMoveEvent);
      cardRef.current.addEventListener('mouseleave', mouseLeaveEvent);
    }
    return () => {
      cardRef.current?.removeEventListener('mousemove', mouseMoveEvent);
      cardRef.current?.removeEventListener('mouseleave', mouseLeaveEvent);
    };
  }, [cardRef]);

  return (
    <div ref={cardRef} className='card my-8'>
      <div className='card__wrapper'>
        <div className='card__3d'>
          <div className='card__image'>{children}</div>
          <div className='card__layer1'></div>
          <div className='card__layer2'></div>
        </div>
      </div>
    </div>
  );
}
