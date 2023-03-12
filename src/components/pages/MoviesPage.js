import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <h2>Movies Page</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesPage);
