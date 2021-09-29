/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RadioButton from '../common/RadioButton/RadioButton';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './filter.scss';

const Filter = ({ toFilter, onChange }) => {
  const genresToFilter = ['horror', 'romance', 'comedy'];
  const history = useHistory();

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
          <Input value={toFilter.name} onChange={(event) => onChange({ ...toFilter, name: event.target.value })} name="name" placeholder="Insert the movie's title" type="text" className="label-container__input" />
        </label>
        <Button type="button" className="simple-button" text="Reset" handleClick={() => history.push('/')} />
      </div>
    </section>
  );
};

Filter.propTypes = {
  toFilter: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,

};

Filter.defaultProps = {
  toFilter: {},
  onChange: null,

};

export default Filter;
