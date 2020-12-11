import React from "react";
import MovieRate from "./MovieRate";

const FilterMv = ({ searchHandle, setRate, rate }) => {
  return (
    <div>
      <MovieRate className="filter" setRate={setRate} rate={rate} />
      <input
        className="filter"
        placeholder="Search"
        onChange={(e) => searchHandle(e.target.value)}
      ></input>
    </div>
  );
};

export default FilterMv;
