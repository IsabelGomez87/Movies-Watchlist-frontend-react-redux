/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../redux/actions/actionsCreators';
import Input from '../common/Input/Input';
import InputTag from '../common/InputTag/InputTag';
import Button from '../common/Button/Button';
import imageMovie from '../../assets/movieImg.png';
import './form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const [movieId, setMovieId] = useState(0);
  const [movieName, setMovieName] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const onSubmitNewMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      image: imageMovie,
      name: movieName,
      genres: selectedTags,
      watched: false,
      movieId,
    };
    setMovieId(movieId + 1);
    dispatch(createMovie(newMovie));
  };

  return (
    <form className="form" onSubmit={onSubmitNewMovie}>
      <div className="form-container">
        <label className="form-container__label" htmlFor="title">
          Movie title
          <Input value={movieName} onChange={(event) => setMovieName(event.target.value)} placeholder="Insert the movie's title and click enter to save" type="text" required />
        </label>
        <label className="form-container__label" htmlFor="genres">
          Movie genres
          <InputTag selectedTags={setSelectedTags} tags={selectedTags} placeholder="Insert a genre and click enter to save" />
        </label>
        <Button type="submit" className="simple-button" text="Add movie" />
      </div>
    </form>
  );
};

export default Form;
