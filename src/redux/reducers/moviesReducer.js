import actionTypes from '../actions/actionTypes';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_MOVIE:
      return [...movies, action.movie]
        .sort((movie1, movie2) => movie1.movieId - movie2.movieId)
        .sort((movie1, movie2) => movie1.watched - movie2.watched);
    case actionTypes.DELETE_MOVIE:
      return movies.filter((movie) => movie.movieId !== action.movieId);
    case actionTypes.UPDATE_MOVIE:
      return movies.map((movie) => ((movie.movieId === action.newData.id)
        ? { ...movie, name: action.newData.name, watched: action.newData.watched }
        : movie))
        .sort((movie1, movie2) => movie1.movieId - movie2.movieId)
        .sort((movie1, movie2) => movie1.watched - movie2.watched);
    default:
      return movies;
  }
};

export default moviesReducer;
