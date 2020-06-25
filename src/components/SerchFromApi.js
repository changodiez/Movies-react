import React from "react";
import MovieData from "./MovieData";

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
    const movie = movies.Search;
    console.log(movie);
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

  return (
    <div>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search a movie"
          onChange={handleChange}
          id="searchInput"
        />
      </div>
      <div className="container">
        <div className="indicadores"></div>
        <div className="contenedor-principal">
          <button id="flecha-izq" className="flecha-izq"><i className="fas fa-angle-left"></i></button>
     <div className="contenedor-carousel">
       <div className="carousel"></div>
     </div>
          <button id="flecha-der" className="flecha-der"><i className="fas fa-angle-right"></i></button>
        </div>
        {movie ? movie.map((item) => <MovieData data={item} />) : null}
      </div>
    </div>
  );
};

export default FromApi;
