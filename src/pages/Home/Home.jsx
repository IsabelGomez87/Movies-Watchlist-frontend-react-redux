import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/home/Form';
import Filter from '../../components/home/Filter';
import List from '../../components/home/List';
import './home.scss';

const Home = () => {
  const data = useSelector((store) => store.movies);
  return (
    <div className="home-container">
      <Form />
      <Filter />
      <List movies={data} />
    </div>

  );
};

export default Home;
