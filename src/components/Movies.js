import React, { Component } from "react";

import MoviesLeft from "./MoviesLeft";
import RelatedInfo from "./RelatedInfo";
import Search from "./Search";

class Movies extends Component {

// constructor(props) {
//     super(props)

//     this.state = {
         
//     }
// }

    
  render() {
    return (
      <div className="principal">
        <Search />
        <MoviesLeft />
        <RelatedInfo />
      </div>
    );
  }
}
export default Movies;
