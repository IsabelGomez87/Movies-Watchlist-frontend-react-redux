import actionTypes from './actionTypes';
import {
  addMovieToApi, deleteMovieToApi, updateMovieToApi,
} from '../../services/movies';

export const createMovie = (movie) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.IS_LOADING,
    });
    await addMovieToApi(movie);
    dispatch({
      type: actionTypes.CREATE_MOVIE,
      movie,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_MOVIE_ERROR,
    });
  } finally {
    dispatch({
      type: actionTypes.IS_LOADING,
    });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.IS_LOADING,
    });
    await deleteMovieToApi(id);
    dispatch({
      type: actionTypes.DELETE_MOVIE,
      movieId: id,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_MOVIE_ERROR,
    });
  } finally {
    dispatch({
      type: actionTypes.IS_LOADING,
    });
  }
};

export const updateMovie = (id, name, watched) => async (dispatch) => {
  try {
    await updateMovieToApi(id, name, watched);
    dispatch({
      type: actionTypes.UPDATE_MOVIE,
      newData: { id, name, watched },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_MOVIE_ERROR,
    });
  }
};
