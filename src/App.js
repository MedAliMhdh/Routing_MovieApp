import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./componenets/MovieList";
import FilterMv from "./componenets/FilterMv";
import AddMv from "./componenets/AddMv";

function App() {
  let [list, setList] = useState([
    {
      title: "Gladiator",
      description:
        "The Roman general Maximus is the most faithful support of the emperor Marcus Aurelius, whom he led from victory to victory. Jealous of Maximus 'prestige, and even more of the emperor's love for him, Marcus Aurelius' son, Commodus, brutally arrogates himself to power, then orders the general's arrest and execution. Maximus escapes his assassins, but cannot prevent the slaughter of his family. Captured by a slave trader, he becomes a gladiator and prepares his revenge.",
      rate: 5,
      imgSrc: "/Gladiator.jpg",
    },
    {
      title: "Shawshank Redemprion",
      description:
        "In 1947, Andy Dufresne, a young banker, was sentenced to life in prison for the murder of his wife and her lover. Despite claiming his innocence, he was imprisoned in Shawshank, the most severe penitentiary in the state of Maine. There he meets Red, a disillusioned man, detained for 20 years. Then begins a great story of friendship between the two men.",
      rate: 3,
      imgSrc: "/TheShawshank.jpg",
    },
    {
      title: "Spy Game ",
      description:
        "At the time of leaving the CIA, Nathan Muir learns that his ex-partner, the young tom Bishop, has just been captured in China during a daring operation. Accused of espionage, he will be executed within 24 hours. The CIA, fearing an international incident, refuses to save him. Forgetting the resentment, Nathan decides to take care of it himself. For him then begins his most personal and most dangerous mission.",
      rate: 2,
      imgSrc: "/SpyGame.jpg",
    },
    {
      title: "Titanic",
      description:
        "In 1997, the wreckage of the Titanic was the subject of a feverish exploration, led by treasure seekers in search of a blue diamond that emerges on board. Struck by a television report, one of the survivors of the shipwreck, aged 102, Rose DeWitt, goes there and talks about her memories. 1912. Engaged to an arrogant industrialist, Rose meets a penniless artist on the boat.",
      rate: 5,
      imgSrc: "/Titanic.jpg",
    },
  ]);
  let [filtredList, setFiltredList] = useState(list);
  let [searchValue, setsearchValue] = useState("");
  let [showModal, setShowModal] = useState(false);
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newUrl, setNewUrl] = useState("");
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
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className="App">
      {!showModal && (
        <>
          <div className="header">
            <button onClick={() => setShowModal(true)}>Add Movie</button>

            <FilterMv
              searchHandle={searchHandle}
              setRate={setRate}
              rate={rate}
            />
          </div>
          <MovieList list={filtredList} />
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
        />
      )}
    </div>
  );
}

export default App;
