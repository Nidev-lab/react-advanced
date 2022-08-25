import React from 'react';
import classNames from 'classnames';
import { useThemeContext } from '../../providers/ThemeProvider';

// eslint-disable-next-line object-curly-newline
const Card = ({ name, image, species, id, getIdPersonaje }) => {
  if (!name || !image) {
    return null;
  }

  const theme = useThemeContext();

  const handleClick = () => {
    getIdPersonaje(id);
  };

  return (
    <div className="card" data-testid="character-card">
      <img src={image} className="card-img-top" alt={image} />
      <div
        className={classNames('card-body', {
          'bg-light': theme === 'light',
          'bg-dark text-white': theme === 'dark',
        })}
      >
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species}</p>
        <button
          className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-success'}`}
          onClick={handleClick}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
};

export default Card;
