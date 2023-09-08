import React, { useEffect, useState } from "react";
import molru from './assets/molru.gif'
import './Timmer.css'
import ProgressBar from './ProgressBar'

const CountdownTimer = ({ hours = 18 }) => {
  const workStartHour = 9; // 아침 9시 시작
  const workEndHour = hours; // 18시 퇴근

  const calculateTargetDate = () => {
    const date = new Date();
    date.setHours(hours, 0, 0, 0); // 18시, 0분, 0초로 설정
    return date;
  };

  const calculateTimeLeft = () => {
    let diff = +calculateTargetDate() - +new Date();
    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const calculateProgress = () => {
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(workStartHour, 0, 0, 0); // 9시로 설정
    const elapsedTime = now - startOfDay;
    const workDuration = (workEndHour - workStartHour) * 60 * 60 * 1000; // 9시간
    return elapsedTime / workDuration; // 진행도의 비율
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdownContainer">
      <h1>몰루시계</h1>
      <img
        src={molru}
        alt="molru"
        className="profileimg"
      />
      <div className="timerText">
        퇴근까지 <br/>
      {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
    </div>
    <ProgressBar value={calculateProgress()} max={1} />
    </div>
  );
};

export default CountdownTimer;
