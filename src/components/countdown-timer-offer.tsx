
'use client';

import { useState, useEffect } from 'react';

export function CountdownTimerOffer() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        A oferta expira em{' '}
        <span className="font-bold text-coral tabular-nums">
          {formatTime(minutes)}:{formatTime(seconds)}
        </span>
      </p>
    </div>
  );
}
