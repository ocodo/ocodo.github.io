import { useEffect, useRef } from 'react';

export const GradientBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;

    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    const move = () => {
      curX += (tgX - curX) / 50;
      curY += (tgY - curY) / 50;

      interBubble.style.transform = `translate(
        ${Math.round(curX)}px,
        ${Math.round(curY)}px
      )`;

      animationFrameId = requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="goo-svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 12 -8
              "
              result="goo"
            />

            <feBlend
              in="SourceGraphic"
              in2="goo"
            />
          </filter>
        </defs>
      </svg>

      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />

        <div
          ref={interactiveRef}
          className="interactive"
        />
      </div>
    </div>
  );
}

