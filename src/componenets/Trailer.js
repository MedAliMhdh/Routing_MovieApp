import React from "react";
import "../App.css";
import MovieRAte from "./MovieRate";

const Trailer = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h1 className="movieTitle">{movie.title}</h1>
      <div className="trailer">
        <div>
          <MovieRAte rate={movie.rate} setRate={() => {}} />
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 style={{ float: "left" }}>{movie.description}</h5>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
