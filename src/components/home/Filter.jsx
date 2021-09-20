/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RadioButton from '../common/RadioButton/RadioButton';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './filter.scss';

const Filter = () => {
  const genresToFilter = ['horror', 'romance', 'comedy'];
  const [isSelected, setIsSelected] = useState(false);
  const [titleFilter, setTitleFilter] = useState('');
  const history = useHistory();

  const onChange = (event) => {
    setTitleFilter(event.target.value);
  };

  return (
    <section className="container">
      <div className="filter-container">
        <div className="radio-buttons-container">
          {genresToFilter.map((genre) => (
            <RadioButton
              value={genre}
              text={genre}
              isSelected={isSelected}
              onChange={(event) => ((genre !== event.target.value) ? isSelected : setIsSelected(true) && history.push(`/genre=${genre}`))}
              required
              id={genre}
              name={genre}
            />
          ))}
        </div>
        <label className="label-container" htmlFor="name">
          Search movie:
          <Input value={titleFilter} onChange={onChange} name="name" placeholder="Insert the movie's title" type="text" className="label-container__input" />
        </label>
        <Button type="button" className="simple-button" text="Reset" handleClick={() => history.push('/')} />
      </div>
    </section>
  );
};

export default Filter;
