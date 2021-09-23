/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMovie, updateMovie } from '../../redux/actions/actionsCreators';
import Card from './Card';
import '../../assets/movieImg.png';
import './list.scss';

const List = ({ movies }) => {
  const dispatch = useDispatch();

  const setChangeMovie = (name, id) => {
    dispatch(updateMovie(name, id));
  };

  const setDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <section className="list-container" data-testid="list">
      {movies && movies.map((movie) => (
        <Card
          {...movie}
          key={movie.name}
          setChangeMovie={() => setChangeMovie(movie.name, movie.movieId)}
          setDeleteMovie={() => setDeleteMovie(movie.movieId)}
        />
      ))}
    </section>
  );
};

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  movies: [],
};

export default List;
