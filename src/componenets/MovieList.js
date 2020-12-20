import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ list1, setClickedMovie, clickedMovie }) => {
  const handleClickedMovie = (x) => {
    let y = list1.find((mov) => {
      if (mov.title == x) {
        return mov;
      }
    });
    setClickedMovie(y);
  };

  const movieList = list1.map((movie, i) => (
    <MovieCard
      key={i}
      rate={movie.rate}
      title={movie.title}
      description={movie.description}
      id={movie.id}
      handleClickedMovie={handleClickedMovie}
    >
      <Link to={`/${movie.id}`}>
        <img
          src={movie.imgSrc}
          style={{ width: "280px", height: "420px" }}
          alt="Movie poster"
        ></img>
      </Link>
    </MovieCard>
  ));
  return <ul className="movieList">{movieList}</ul>;
};

export default MovieList;
