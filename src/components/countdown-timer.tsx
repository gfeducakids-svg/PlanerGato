'use client';

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const difference = endOfDay.getTime() - now.getTime();

      let newTimeLeft = { hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };
    
    // Set initial time without waiting for 1s
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
        <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-headline text-white">{formatTime(timeLeft.hours)}</span>
            <span className="text-xs text-white/80">Horas</span>
        </div>
         <span className="text-3xl md:text-5xl font-headline text-white/50 -translate-y-2">:</span>
        <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-headline text-white">{formatTime(timeLeft.minutes)}</span>
            <span className="text-xs text-white/80">Minutos</span>
        </div>
         <span className="text-3xl md:text-5xl font-headline text-white/50 -translate-y-2">:</span>
        <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-headline text-white">{formatTime(timeLeft.seconds)}</span>
            <span className="text-xs text-white/80">Segundos</span>
        </div>
    </div>
  );
}
