import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from '../../components/home/Form';
import Filter from '../../components/home/Filter';
import List from '../../components/home/List';
import Spinner from '../../components/common/Spinner/Spinner';
import './home.scss';

const Home = () => {
  const data = useSelector((store) => store.movies);
  const isLoading = useSelector((store) => store.isLoading);
  const { genreId = '' } = useParams();
  const [toFilter, setToFilter] = useState({ name: '', genre: '' });
  const [moviesList, setMovieList] = useState(data);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  const getDataFiltered = () => {
    let dataFiltered = data;
    if (toFilter.genre !== '') {
      dataFiltered = data.filter((movie) => movie.genres
        .some((genre) => genre.toLowerCase() === toFilter.genre.toLowerCase()));
      setIsFilterLoading(false);
    }
    if (toFilter.name !== '') {
      dataFiltered = data.filter((movie) => movie.name.toLowerCase()
        .includes(toFilter.name.toLowerCase()));
      setIsFilterLoading(false);
    }
    setMovieList(dataFiltered);
  };

  useEffect(() => {
    getDataFiltered();
  }, [data]);

  useEffect(() => {
    setToFilter({ ...toFilter, genre: genreId });
  }, [genreId]);

  useEffect(() => {
    if (toFilter.name !== '' || toFilter.genre !== '') {
      setIsFilterLoading(true);
    }
    setTimeout(getDataFiltered, 3000);
  }, [toFilter.genre, toFilter.name]);

  return (
    <div className="home-container">
      <Form />
      <Filter toFilter={toFilter} onChange={setToFilter} />
      {isLoading || isFilterLoading ? <Spinner />
        : <List movies={moviesList} />}
    </div>

  );
};

export default Home;
