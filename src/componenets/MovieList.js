import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const tab = props.list;
  const movieList = tab.map((movie, i) => (
    <MovieCard
      key={i}
      rate={movie.rate}
      title={movie.title}
      description={movie.description}
    >
      <img
        src={movie.imgSrc}
        style={{ width: "280px", height: "420px" }}
        alt="Movie poster"
      ></img>
    </MovieCard>
  ));
  return <ul className="movieList">{movieList}</ul>;
};

export default MovieList;
