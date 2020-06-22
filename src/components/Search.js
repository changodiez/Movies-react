import React, { PureComponent } from "react";
import PropTypes from "prop-types";




class Search extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="nav-search">
      <h5>Type to search a movie:</h5>
          <input onChange={this.handleChange} />
        </div>
      
    );
  }
}

export default Search;