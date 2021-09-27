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

  return (
    <section className="list-container" data-testid="list">
      {movies && movies.map((movie) => (
        <Card
          {...movie}
          key={movie.name}
          setUpdateMovie={(id, name, value) => dispatch(updateMovie(id, name, value))}
          setDeleteMovie={(id) => dispatch(deleteMovie(id))}
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
