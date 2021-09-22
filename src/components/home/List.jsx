/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../../assets/movieImg.png';
import './list.scss';

const List = ({ movies }) => (
  <section className="list-container" data-testid="list">
    {movies && movies.map((movie) => (
      <Card
        {...movie}
        key={movie.name}
      />
    ))}
  </section>
);

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  movies: [],
};

export default List;
