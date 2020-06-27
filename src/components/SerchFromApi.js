import React from "react";
import MovieData from "./MovieData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const FromApi = (props) => {
  const [search, setSearch] = React.useState("");
  const [movie, setMovie] = React.useState([]);

  const key = "4a97bc95";
  const URL = `http://www.omdbapi.com/?apikey=${key}&s=${search}&page=1`;

  const getMovies = (search) => {
    fetch(URL)
      .then((response) => onResponse(response))
      .catch((error) => onError(error));
  };

  const onResponse = (response) => {
    response.json().then((movies) => buildMovieInfo(movies));
  };

  const buildMovieInfo = (movies) => {
    const movie = movies.Search
console.log(movie)
     setMovie(movie);
  };

 
  const onError = (error) => {
    console.log("something went wrong", error);
  };

  React.useEffect(() => {
    getMovies(URL);
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    getMovies(URL);
  };


  // --------------------- carousel de peliculas ------------
  const moviesRow = document.getElementById("moviesRow")

const rigthClick = () => { 
  if (moviesRow){ 
  moviesRow.scrollLeft += moviesRow.offsetWidth
  }
}
 
const leftClick = () => { 
  if (moviesRow){ 
  moviesRow.scrollLeft -= moviesRow.scrolloffsetWidth
  }
}

  return (
    <div>
      <div className="nav-search">
        <input
          type="text"
          value = {search}
          placeholder="Search a movie"
          onChange={handleChange}
          id="searchInput"
        />
      </div>
      <div className="container">
        <div className="indicadores"></div>
        <div className="contenedor-principal">
          <button id="flecha-izq" className="flecha-izq" onClick={leftClick}>
            {movie ? <FontAwesomeIcon icon={faAngleLeft} /> : null}
          </button>
          <div className="contenedor-carousel" id="moviesRow">
            <div className="carousel">
              <div className="peliculas">
                
                {movie
                  ? movie
                  .filter((item)=>item.Type == "movie")
                  .map((item, index) => <MovieData data={item} key={index} />)
                  : null}
              </div>
            </div>
          </div>
          <button id="flecha-der" className="flecha-der"onClick={rigthClick}>
            {movie ? <FontAwesomeIcon icon={faAngleRight} /> : null}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromApi;
