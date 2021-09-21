import actionTypes from '../actions/actionTypes';

const selectedMovieReducer = (movie = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_MOVIE:
      return { ...movie, ...action.movie };
    default:
      return movie;
  }
};

export default selectedMovieReducer;
