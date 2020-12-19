import React from "react";
import MovieRate from "./MovieRate";

const MovieCard = ({ title, description, rate, children }) => {
  return (
    <div className="MovieCard">
      <div className="Poster">
        <div className="img">
          {children}
          <h3 className="watchTrailer">Watch Trailer</h3>
        </div>
      </div>
      <div className="MovieDescrip">
        <h1>{title}</h1>
        <MovieRate rate={rate} setRate={() => {}} />
      </div>
    </div>
  );
};
export default MovieCard;
