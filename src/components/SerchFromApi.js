import React from "react";
import MovieData from "./MovieData";
import ModalMovieCard from "./ModalMovieCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


const FromApi = (props) => {
  const [search, setSearch] = React.useState("");
  const [movie, setMovie] = React.useState([]);

  const key = "4a97bc95";
  const URL = `http://www.omdbapi.com/?apikey=${key}&s=${search}&page=1`;

  React.useEffect(() => {
    getMovies(URL);
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    getMovies(URL);
  };

  const getMovies = (search) => {
    fetch(URL)
      .then((response) => onResponse(response))
      .catch((error) => onError(error));
  };

  const onSumit = (event) => {
    event.preventDefault()
    getMovies(URL);
  }

  const onResponse = (response) => {
    response.json().then((movies) => buildMovieInfo(movies));
  };

  const buildMovieInfo = (movies) => {
    const movie = movies.Search;
    setMovie(movie);
  };

  const onError = (error) => {
    console.log("something went wrong", error);
  };

  // ------------------Header Transition ----------------//

  const headerTransition = document.getElementById("header-transition");

  if (headerTransition) {
    if (movie) {
      headerTransition.classList.add("headerAfter");
    } else headerTransition.classList.remove("headerAfter");
  }

  // --------------------- control carousel de peliculas ------------
  const moviesRow = document.getElementById("moviesRow");

  const rigthClick = () => {
    if (moviesRow) {
      moviesRow.scrollLeft += moviesRow.offsetWidth;
    }
  };

  const leftClick = () => {
    if (moviesRow) {
      moviesRow.scrollLeft -= moviesRow.offsetWidth;
    }
  };
  // --------------------- Modal Movie CArd ------------ //

const [ movieCardInfo, setMovieCardInfo ] = React.useState(null)

const handleModalInfo = (ModalInfo) => {
setMovieCardInfo(ModalInfo);
}


  return (
    <div>
      <form onSubmit={onSumit} method="get" action="" className="nav-search">
        <div className="searchAndIcon">
          <input
            type="text"
            value={search}
            placeholder="Search a movie"
            onChange={handleChange}
            id="searchInput"
            required
          ></input>
          <div>
            <button type="submit"><FontAwesomeIcon icon={faSearch} />
                   </button>
          </div>
        </div>
      </form>

      <div className="container">
        <div className="contenedor-principal">
          <button id="flecha-izq" className="flecha-izq" onClick={leftClick}>
            {movie ? <FontAwesomeIcon icon={faAngleLeft} /> : null}
          </button>
          <div className="contenedor-carousel" id="moviesRow">
            <div className="carousel">
              <div className="peliculas">
                {movie
                  ? movie
                      .filter((item) => item.Type == "movie")
                      .map((item, index) => (
                        <MovieData data={item} key={index} handleModalInfo={handleModalInfo} />
                      ))
                  : null}
              </div>
            </div>
          </div>
          <button id="flecha-der" className="flecha-der" onClick={rigthClick}>
            {movie ? <FontAwesomeIcon icon={faAngleRight} /> : null}
          </button>
        </div>
      </div>
      {movieCardInfo ? <ModalMovieCard movieCardInfo={movieCardInfo} /> : null}
    </div>
  );
};

export default FromApi;
