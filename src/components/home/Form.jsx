/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Input from '../common/Input/Input';
import InputTag from '../common/InputTag/InputTag';
import Button from '../common/Button/Button';
import './form.scss';

const Form = () => {
  const [movieName, setMovieName] = useState('');

  const selectedTags = () => {
    // TODO: implement logic
  };

  return (
    <form className="form">
      <div className="form-container">
        <label className="form-container__label" htmlFor="title">
          Movie title
          <Input value={movieName} placeholder="Insert the movie's title and click enter to save" type="text" onChange={(event) => setMovieName(event.target.value)} required />
        </label>
        <label className="form-container__label" htmlFor="genres">
          Movie genres
          <InputTag selectedTags={selectedTags} placeholder="Insert a genre and click enter to save" required />
        </label>
        <Button type="submit" className="simple-button" text="Add movie" />
      </div>
    </form>
  );
};

export default Form;
