import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button/Button';
import Checkbox from '../common/Checkbox/Checkbox';
import './card.scss';

const Card = ({
  image, name, genres, watched,
}) => {
  const setChangeMovie = () => {
    // TODO: implement the logic
  };
  const setDeleteMovie = () => {
    // TODO: implement the logic

  };

  return (
    <article className="card">
      <div className="card-image">
        <img className="image" src={image} alt="movie" />
      </div>
      <div className="card-info">
        <p className="title">{name}</p>
        <ul className="card-info__genres">
          {genres.map((genre) => <li className="tag" key={genre}>{genre}</li>)}
        </ul>
        <Checkbox className="container-info__checkbox" isChecked={watched} onChange={setChangeMovie} value={watched} name={name} text="Watched" />
        <Button className="delete-button" text="Detele" type="buton" handleClick={setDeleteMovie} />
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  watched: PropTypes.bool,

};

Card.defaultProps = {
  image: '',
  name: '',
  genres: [],
  watched: false,
};

export default Card;
