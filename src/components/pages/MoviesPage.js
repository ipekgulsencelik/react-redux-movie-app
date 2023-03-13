import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import MoviesList from "../movies/list/MoviesList";
class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <h2>Movies Page</h2>
        <MoviesList movies={this.props.movies}></MoviesList>
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
