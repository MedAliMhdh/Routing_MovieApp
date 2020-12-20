import React, { useState } from "react";
import "./App.css";
import HomePage from "./componenets/HomePage";
import Trailer from "./componenets/Trailer";
import { ReactComponent as ReactLogo } from "./home.svg";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [clickedMovie, setClickedMovie] = useState({});

  const homeLogoStyle = {
    width: "40px",
    float: "left",
    marginLeft: "70px",
    position: "fixed",
    left: "25%",
    top: "3%",
    marginLeft: "-300px",
    marginTop: "0px"
  };

  return (
    <div className="App">
      <div>
        <Link to="/">
          <ReactLogo style={homeLogoStyle} />
        </Link>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              setClickedMovie={setClickedMovie}
              clickedMovie={clickedMovie}
            />
          )}
        />
        <Route
          path="/:movieId"
          render={(props) => <Trailer movie={clickedMovie} />}
        />
      </Switch>
    </div>
  );
}

export default App;
