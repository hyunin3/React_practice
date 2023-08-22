import React, { useEffect, useState } from "react";
import molru from './assets/molru.gif'
import './Timmer.css'

const CountdownTimer = ({ hours = 18 }) => {
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
    </div>
  );
};

export default CountdownTimer;
