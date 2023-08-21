import React, { memo } from 'react';
import './Ball.css';



const Ball = memo(({ number }) => {
  if (!number) return null;

  let background;
  if (number < 10) {
    background = 'orange';
  } else if (number < 20) {
    background = 'skyblue';
  } else if (number < 30) {
    background = 'red';
  } else if (number < 40) {
    background = 'grey';
  } else {
    background = 'green';
  }
  return (
    <div className="ball" style={{ backgroundColor: background }}>
      {number}
    </div>
  );
});

export default Ball;
