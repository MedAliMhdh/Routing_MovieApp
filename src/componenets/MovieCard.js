import React from "react";
import MovieRate from "./MovieRate";

const MovieCard = ({ title, description, rate, children }) => {
  return (
    <div className="MovieCard">
      <div className="Poster">{children}</div>
      <div className="MovieDescrip">
        <h1>{title}</h1>
        <MovieRate rate={rate} setRate={() => {}} />
        <p>{description}</p>
      </div>
    </div>
  );
};
export default MovieCard;
