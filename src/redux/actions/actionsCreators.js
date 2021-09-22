import actionTypes from './actionTypes';
import {
  addMovieToApi, deleteMovieToApi, updateMovieToApi,
} from '../../services/movies';

export const createMovie = (movie) => async (dispatch) => {
  try {
    await addMovieToApi(movie);
    dispatch({
      type: actionTypes.CREATE_MOVIE,
      movie,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_MOVIE_ERROR,
    });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await deleteMovieToApi(id);
    dispatch({
      type: actionTypes.DELETE_MOVIE,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_MOVIE_ERROR,
    });
  }
};

export const updateMovie = (movie) => async (dispatch) => {
  try {
    await updateMovieToApi(movie);
    dispatch({
      type: actionTypes.UPDATE_MOVIE,
      movie,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_MOVIE_ERROR,
    });
  }
};
