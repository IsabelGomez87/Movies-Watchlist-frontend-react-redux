/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RadioButton from '../common/RadioButton/RadioButton';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './filter.scss';

const Filter = () => {
  const genresToFilter = ['horror', 'romance', 'comedy'];
  const { genreId = '' } = useParams();
  const [toFilter, setToFilter] = useState({ title: '', genre: '' });
  const history = useHistory();

  useEffect(() => {
    setToFilter({ ...toFilter, genre: genreId });
  }, [genreId]);

  const onChange = (event) => {
    setToFilter({ ...toFilter, title: event.target.value });
  };

  return (
    <section className="container">
      <div className="filter-container">
        <div className="radio-buttons-container">
          {genresToFilter.map((genre) => (
            <RadioButton
              key={genre}
              value={genre}
              text={genre}
              isSelected={genre.toLowerCase() === toFilter.genre.toLowerCase()}
              onChange={() => history.push(`/genre=${genre}`)}
              required
              id={genre}
              name={genre}
            />
          ))}
        </div>
        <label className="label-container" htmlFor="name">
          Search movie:
          <Input value={toFilter.title} onChange={onChange} name="name" placeholder="Insert the movie's title" type="text" className="label-container__input" />
        </label>
        <Button type="button" className="simple-button" text="Reset" handleClick={() => history.push('/')} />
      </div>
    </section>
  );
};

export default Filter;
