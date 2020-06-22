import React from "react";

const MovieData = (props) => {
  console.log(props.plot);

//   let backgrounStyle = {
//     backgroundImage: `url(${props.data.poster})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "none",
//     backgroundSize: "cover",
    // style={backgrounStyle}
//   };

  return (
    <div className="container" >
      <div className="containerMovieData">
        <h1>{props.data.title}</h1>
        <img alt="Poster" src={props.data.poster}></img>
  <h5>{`Year: ${props.data.year}`}</h5>
  <h5>{`Director: ${props.data.director}`}</h5>
  <h5>{`Rating: ${props.data.rating}`}</h5>
  <h5>{`Cast: ${props.data.cast}`}</h5>
       
      </div>
      <p>{props.data.plot}</p>
    </div>
  );
};

export default MovieData;
