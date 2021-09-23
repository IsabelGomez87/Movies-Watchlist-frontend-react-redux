import actionTypes from '../actions/actionTypes';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_MOVIE:
      return [...movies, action.movie];
    case actionTypes.DELETE_MOVIE:
      return movies.filter((item) => item.movieId !== action.movieId);
    default:
      return movies;
  }
};

export default moviesReducer;
