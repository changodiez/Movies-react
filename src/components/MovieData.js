import React from "react";

const MovieData = (props) => {
  const dataMovie = props.data
 
  let poster = "";

  if (dataMovie.Poster === "N/A") {
    poster = "https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg";
  } else {
    poster = dataMovie.Poster;
  }

  return (
    <div className="movie-card-container">
      {dataMovie ? (
        <div className="movie-card">
          <img src={poster} alt="poster"></img>
          <ul>
            <li>Title:{dataMovie.Title}</li>
            <li>Year: {dataMovie.Year} </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MovieData;
