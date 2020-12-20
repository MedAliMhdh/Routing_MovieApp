import React, { useState, useEffect } from "react";
import "../App.css";
import MovieList from "./MovieList";
import FilterMv from "./FilterMv";
import AddMv from "./AddMv";

const HomePage = ({ setClickedMovie, clickedMovie }) => {
  let [list, setList] = useState([
    {
      title: "Gladiator",
      description:
        "The Roman general Maximus is the most faithful support of the emperor Marcus Aurelius, whom he led from victory to victory. Jealous of Maximus 'prestige, and even more of the emperor's love for him, Marcus Aurelius' son, Commodus, brutally arrogates himself to power, then orders the general's arrest and execution. Maximus escapes his assassins, but cannot prevent the slaughter of his family. Captured by a slave trader, he becomes a gladiator and prepares his revenge.",
      rate: 5,
      imgSrc: "/Gladiator.jpg",
      id: Math.random(),
      trailer: "https://www.youtube.com/embed/owK1qxDselE",
    },
    {
      title: "Shawshank Redemprion",
      description:
        "In 1947, Andy Dufresne, a young banker, was sentenced to life in prison for the murder of his wife and her lover. Despite claiming his innocence, he was imprisoned in Shawshank, the most severe penitentiary in the state of Maine. There he meets Red, a disillusioned man, detained for 20 years. Then begins a great story of friendship between the two men.",
      rate: 3,
      imgSrc: "/TheShawshank.jpg",
      id: Math.random(),
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      title: "Spy Game ",
      description:
        "At the time of leaving the CIA, Nathan Muir learns that his ex-partner, the young tom Bishop, has just been captured in China during a daring operation. Accused of espionage, he will be executed within 24 hours. The CIA, fearing an international incident, refuses to save him. Forgetting the resentment, Nathan decides to take care of it himself. For him then begins his most personal and most dangerous mission.",
      rate: 2,
      imgSrc: "/SpyGame.jpg",
      id: Math.random(),
      trailer: "https://www.youtube.com/embed/yqhz7p9Mes8",
    },
    {
      title: "Titanic",
      description:
        "In 1997, the wreckage of the Titanic was the subject of a feverish exploration, led by treasure seekers in search of a blue diamond that emerges on board. Struck by a television report, one of the survivors of the shipwreck, aged 102, Rose DeWitt, goes there and talks about her memories. 1912. Engaged to an arrogant industrialist, Rose meets a penniless artist on the boat.",
      rate: 5,
      imgSrc: "/Titanic.jpg",
      id: Math.random(),
      trailer: "https://www.youtube.com/embed/CHekzSiZjrY",
    },
  ]);
  let [filtredList, setFiltredList] = useState(list);
  let [searchValue, setsearchValue] = useState("");
  let [showModal, setShowModal] = useState(false);
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newUrl, setNewUrl] = useState("");
  let [newTrailer, setNewTrailer] = useState("");
  let [rate, setRate] = useState(0);

  const searchHandle = (value) => {
    setsearchValue(value);
  };

  useEffect(() => {
    setFiltredList(
      list.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          movie.rate >= rate
      )
    );
  }, [searchValue, list, rate]);

  const CancelMovieAddHandle = () => setShowModal(false);

  const AddMovieHandle = () => {
    setList([
      ...list,
      {
        title: newTitle,
        description: newDescription,
        imgSrc: newUrl,
        rate: rate,
        id: Math.random(),
        trailer: newTrailer,
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className="App">
      {!showModal && (
        <>
          <div className="header">
            <button className="AddMvBtn" onClick={() => setShowModal(true)}>
              Add Movie
            </button>
            <FilterMv
              searchHandle={searchHandle}
              setRate={setRate}
              rate={rate}
            />
          </div>
          <MovieList
            list1={list}
            list={filtredList}
            setClickedMovie={setClickedMovie}
            clickedMovie={clickedMovie}
          />
        </>
      )}

      {showModal && (
        <AddMv
          CancelMovieAddHandle={CancelMovieAddHandle}
          AddMovieHandle={AddMovieHandle}
          setNewTitle={setNewTitle}
          setNewDescription={setNewDescription}
          setNewUrl={setNewUrl}
          setRate={setRate}
          setNewTrailer={setNewTrailer}
        />
      )}
    </div>
  );
};

export default HomePage;
