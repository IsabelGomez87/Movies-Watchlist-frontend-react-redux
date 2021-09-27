import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import Checkbox from '../common/Checkbox/Checkbox';
import './card.scss';

const Card = ({
  image, name, genres, watched, movieId, setUpdateMovie, setDeleteMovie,
}) => {
  const [canEdit, setCanEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  return (
    <article className="card">
      <div className="card-image">
        <img className="image" src={image} alt="movie" />
      </div>
      <div className="card-info">
        {canEdit
          ? (
            <div className="card-info__input-edit">
              <Input
                placeholder="Enter new name"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                name="editName"
              />
              <Button
                className="save-button"
                text={<i className="far fa-check-circle" />}
                type="button"
                handleClick={() => setUpdateMovie(movieId, newName, watched)}
              />
            </div>
          )
          : (
            <div className="card-info__edit">
              <Button
                className="edit-button"
                handleClick={() => setCanEdit(!canEdit)}
                type="button"
                text={<i className="far fa-edit" />}
              />
              <p className="title">{name}</p>
            </div>
          )}
        <ul className="card-info__genres">
          {genres.map((genre) => <li className="tag" key={genre}>{genre}</li>)}
        </ul>
        <Checkbox className="container-info__checkbox" isChecked={watched} onChange={() => setUpdateMovie(movieId, name, !watched)} value={watched} name={name} text="Watched" />
        <Button className="delete-button" text="Detele" type="buton" handleClick={() => setDeleteMovie(movieId)} />
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  watched: PropTypes.bool,
  movieId: PropTypes.number,
  setUpdateMovie: PropTypes.func,
  setDeleteMovie: PropTypes.func,

};

Card.defaultProps = {
  image: '',
  name: '',
  genres: [],
  watched: false,
  movieId: null,
  setUpdateMovie: null,
  setDeleteMovie: null,
};

export default Card;
