import React from "react";
import MovieData from "./MovieData";


const FromApi = (props) => {
  const [movie, setMovie] = React.useState([]);
  
  const key = "4a97bc95";
  let serch = "Lion King";
  const URL = `http://www.omdbapi.com/?apikey=${key}&t=${serch}`;
  //   const ImgURL = `http://img.omdbapi.com/?apikey=${key}&`;

  const getMovies = (URL) => {
    fetch(URL)
      .then((response) => onResponse(response))
      .catch((error) => onError(error));
  };

  const onResponse = (response) => {
    response.json().then((movies) => buildMovieInfo(movies));
  };

  const buildMovieInfo = (movies) => {
    const movie = movies;

    console.log(movie);
    setMovie(movie);
  };

  const onError = (error) => {
    console.log("something went wrong", error);
  };

  React.useEffect(() => {
    getMovies(URL);
  }, []);

  const MovieInfo = {
    title: movie.Title,
    plot: movie.Plot,
    poster: movie.Poster,
    year: movie.Year,
    rating: movie.imdbRating,
    director: movie.director,
    cast: movie.Actors,
  };

  return (<div>
 
    <MovieData data={MovieInfo} />
    </div>)
  
}

  


export default FromApi;
