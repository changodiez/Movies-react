import React from "react";

const MovieData = (props) => {
  const dataMovie = props.data;

  let poster = "";

  if (dataMovie.Poster === "N/A") {
    poster = "https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg";
  } else {
    poster = dataMovie.Poster;
  }

  // ---------- ON CLICK ------- //

  // const [movieInfo, setMovieInfo] = React.useState ([])
  const handleClick = () => {
    const key = "4a97bc95";
    const URL = `http://www.omdbapi.com/?apikey=${key}&t=${dataMovie.Title}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => buildData(data));

    function buildData(data) {
      let movieInfo = data;  
      console.log(movieInfo);   
    }

    
    
  };

  return (
    <div className="movie-card-container">
      {dataMovie ? (
        <div className="movie-card">
          <img
            src={poster}
            alt={dataMovie.Title}
            onClick={handleClick}
            cursor="pointer"
          ></img>
          <ul>
            <li>
              <h4>{dataMovie.Title}</h4>
            </li>
            <li>Year: {dataMovie.Year} </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MovieData;
