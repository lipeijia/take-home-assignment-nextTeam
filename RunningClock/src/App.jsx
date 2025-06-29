import React from 'react';
import { useState, useRef } from 'react';

/**
 * RunningClock - 倒數計時器主組件
 * 
 * 功能：
 * - 自定義分鐘和秒數設定
 * - 啟動/暫停/重置計時功能
 * - 實時顯示剩餘時間
 * - 自動停止當時間到達零
 */
const App = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [displayTime, setDisplayTime] = useState('00:00');
    const [remainingTime, setRemainingTime] = useState(0);
    const timerRef = useRef(null);

    const formatAndSetDisplayTime = (timeInSeconds) => {
        const mins = Math.floor(timeInSeconds / 60);
        const secs = timeInSeconds % 60;
        setDisplayTime(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
    };

    const startTimer = () => {
        const newTimer = setInterval(() => {
            setRemainingTime(prev => {
                const newTime = prev - 1;
                if (newTime <= 0) {
                    clearInterval(newTimer);
                    setIsRunning(false);
                    setDisplayTime('00:00');
                    timerRef.current = null;
                    return 0;
                }
                formatAndSetDisplayTime(newTime);
                return newTime;
            });
        }, 1000);
        timerRef.current = newTimer;
    };

    const handleStart = () => {
        if (isRunning) {
            // 從頭開始計算
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        const mm = parseInt(minutes);
        const ss = parseInt(seconds);
        if (isNaN(mm) || isNaN(ss)) {
          alert('Please enter valid minutes and seconds.');
          return;
        }
        setIsRunning(true);
        const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
        setRemainingTime(totalSeconds);
        
        formatAndSetDisplayTime(totalSeconds);
        startTimer();
    }

    const handlePause = () => {
        if (isRunning) {
            // 暫停
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsRunning(false);
        } else {
            // 恢復
            if (remainingTime <= 0) return;
            setIsRunning(true);
            startTimer();
        }
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsRunning(false);
        setRemainingTime(0);
        setDisplayTime('00:00');
        setMinutes(0);
        setSeconds(0);
    }

  return (
    <div>
      <label>
        Minutes
        <input type="number" value={minutes} onChange={(e) => setMinutes(e.currentTarget.value)}/>
      </label>
      <label>
        Seconds
        <input type="number" value={seconds} onChange={e => setSeconds(e.currentTarget.value)}/>
      </label>
      <button onClick={handleStart}>START</button>
      <button onClick={handlePause}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>
      <h1 data-testid="running-clock">{displayTime}</h1>
    </div>
  );
};

export default App;
