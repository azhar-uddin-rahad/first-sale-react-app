import React, { useEffect, useState } from 'react';
import Clocks from './Clocks';

const Timer = () => {
    const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
    let interval;
    const startTimer = () => {
        const countDownDate = new Date("May 30,2023").getTime();
        
        interval = setInterval(() => {
          const now = new Date().getTime();
    
          const distance = countDownDate - now;
    
          const days = Math.floor(distance / (24 * 60 * 60 * 1000));
          const hours = Math.floor(
            (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
          const seconds = Math.floor((distance % (60 * 1000)) / 1000);
    
          if (distance < 0) {
            // Stop Timer
    
            clearInterval(interval.current);
          } else {
            // Update Timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
          }
        });
      };
    useEffect(() => {
        startTimer();
      });
    return (
        <div>
            <Clocks timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}> </Clocks>
        </div>
    );
};

export default Timer;