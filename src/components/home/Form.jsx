/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Input from '../common/Input/Input';
import InputTag from '../common/InputTag/InputTag';
import Button from '../common/Button/Button';

const Form = () => {
  const [movieName, setMovieName] = useState('');

  const selectedTags = () => {
    // TODO: implement logic
  };

  return (
    <form className="form-container">
      <label htmlFor="title">
        Movie title:
        <Input value={movieName} placeholder="Insert the movie's title" type="text" onChange={(event) => setMovieName(event.target.value)} required />
      </label>
      <label htmlFor="genres">
        Movie genres:
        <InputTag selectedTags={selectedTags} placeholder="Insert a genre and enter to save" required />
      </label>
      <Button type="submit" className="simple-button" text="Add movie" />
    </form>
  );
};

export default Form;
