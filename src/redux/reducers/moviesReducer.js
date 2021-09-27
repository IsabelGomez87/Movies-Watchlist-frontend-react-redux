import actionTypes from '../actions/actionTypes';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_MOVIE:
      return [...movies, action.movie];
    case actionTypes.DELETE_MOVIE:
      return movies.filter((movie) => movie.movieId !== action.movieId);
    case actionTypes.UPDATE_MOVIE:
      return movies.map((movie) => ((movie.movieId === action.newData.id)
        ? { ...movie, name: action.newData.name, watched: action.newData.watched }
        : movie));
    default:
      return movies;
  }
};

export default moviesReducer;
