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

let isOpen = props.isOpen





// const outSide = React.useEffect ()

//   const handleClick = e => {
//       if (outSide.current.contains(e.target)) {
//           return 
//       }
//       setIsOpen(false)
//   }
  
// React.useEffect ( () =>  {
//     const getClick = document.addEventListener('click', handleClick)
    
//     return () => { getClick () }
//  }, [])


  return (
      <div> 
          
          {isOpen ? (
              
          <div className="modal">
              <button onClick={()=> isOpen = false}>CLOSE</button>
      <div className="container" >
      <div className="containerMovieData">
        <h1>{MovieInfo.title}</h1>
        <img alt="Poster" src={MovieInfo.poster}></img>
        <h5>{`Year: ${MovieInfo.year}`}</h5>
        <h5>{`Director: ${MovieInfo.director}`}</h5>
        <h5>{`Rating: ${MovieInfo.rating}`}</h5>
        <h5>{`Cast: ${MovieInfo.actors}`}</h5>
      </div>
      <p>{MovieInfo.plot}</p>
    </div>
    </div> 
    ) : null}
    </div>
    
    
  );
}

export default ModalMovieCard;
