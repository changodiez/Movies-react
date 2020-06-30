import React, { useEffect } from "react";

function ModalMovieCard(props) {
  let MovieInfo = {
    title: props.movieCardInfo.Title,
    year: props.movieCardInfo.Year,
    time: props.movieCardInfo.Runtime,
    actors: props.movieCardInfo.Actors,
    director: props.movieCardInfo.Director,
    genre: props.movieCardInfo.Genre,
    plot: props.movieCardInfo.Plot,
    poster: props.movieCardInfo.Poster,
    rating: props.movieCardInfo.Ratings,
  };

  console.log (MovieInfo.rating)
  // let isOpen = props.isOpen;

  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>CLOSE</button>
      {isOpen ? (
        <div className="modal">
          <div className="container-modal">
            <div className="containerMovieData">
              <img alt="Poster" src={MovieInfo.poster}></img>
              <div className="movie-info">
                <h1>{MovieInfo.title}</h1>
                <h3>{`(${MovieInfo.year})`}</h3>
                <h5>{`Director: ${MovieInfo.director}`}</h5>
                <h3>{`Rating: ${MovieInfo.rating[0].Value}`}</h3>
                <h5>{`Cast: ${MovieInfo.actors}`}</h5>
                <p>{MovieInfo.plot}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ModalMovieCard;
