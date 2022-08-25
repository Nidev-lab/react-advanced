import classNames from 'classnames';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

const Card = ({ character, getIdPersonaje }) => {
  const theme = useThemeContext();

  const handleClick = () => {
    getIdPersonaje(character.id);
  };

  return (
    <div className="card">
      <img src={ character.image } className="card-img-top" alt="..." />
      <div className={classNames('card-body', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.species}</p>
          <button className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-success'}`} onClick={handleClick}>Go somewhere</button>
      </div>
    </div>
  );
};

export default Card;
