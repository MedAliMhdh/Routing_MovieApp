import React from "react";

const MovieRate = ({ rate, setRate }) => {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    i < rate
      ? stars.push(
          <span onClick={() => setRate(i + 1)} key={i}>
            ★
          </span>
        )
      : stars.push(
          <span onClick={() => setRate(i + 1)} key={i}>
            ☆
          </span>
        );
  }
  return stars;
};

//declaring default props in case we click on stars of movie Card and we don't have a setRate function
// MovieRate.defaultPros = {
//   setRate: () => {},
// };

export default MovieRate;
