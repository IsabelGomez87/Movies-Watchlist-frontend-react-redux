import actionTypes from './actionTypes';
import {
  addMovieToApi, deleteMovieToApi, updateMovieToApi, loadMoviesApi,
} from '../../services/movies';

export const createMovie = (movie) => async (dispatch) => {
  try {
    const response = await addMovieToApi(movie);
    dispatch({
      type: actionTypes.CREATE_MOVIE,
      movie: response,
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

export const updateMovie = (data) => async (dispatch) => {
  try {
    const response = await updateMovieToApi(data);
    dispatch({
      type: actionTypes.UPDATE_MOVIE,
      movie: response,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_MOVIE_ERROR,
    });
  }
};

export const loadMovies = () => async (dispatch) => {
  try {
    const response = await loadMoviesApi();
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies: response,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_MOVIES_ERROR,
    });
  }
};
