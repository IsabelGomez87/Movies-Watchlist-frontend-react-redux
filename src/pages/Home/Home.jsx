/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from '../../components/home/Form';
import Filter from '../../components/home/Filter';
import List from '../../components/home/List';
import './home.scss';

const Home = () => {
  const data = useSelector((store) => store.movies);
  const { genreId = '' } = useParams();
  const [toFilter, setToFilter] = useState({ name: '', genre: '' });
  const [moviesList, setMovieList] = useState(data);

  const getDataFiltered = () => {
    let dataFiltered = data;
    if (toFilter.genre !== '') {
      dataFiltered = data.filter((movie) => movie.genres
        .some((genre) => genre.toLowerCase() === toFilter.genre.toLowerCase()));
    }
    console.log('dataFiltered', dataFiltered);
    setMovieList(dataFiltered);
  };

  useEffect(() => {
    if (toFilter.genre === '' || toFilter.name === '') {
      getDataFiltered();
    }
  }, [toFilter.genre, toFilter.name, data]);

  useEffect(() => {
    setToFilter({ ...toFilter, genre: genreId });
  }, [genreId]);

  const onChangeFilter = (event) => {
    setToFilter({ ...toFilter, name: event.target.value });
  };

  return (
    <div className="home-container">
      <Form />
      <Filter toFilter={toFilter} onChange={onChangeFilter} />
      {moviesList.length
        ? <List movies={moviesList} />
        : (
          <p className="message">Add your movies here!</p>
        )}
    </div>

  );
};

export default Home;
