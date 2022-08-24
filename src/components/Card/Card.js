import classNames from 'classnames';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProviders';

const Card = ({ character, getIdPersonaje }) => {
  if (!character.name) {
    return null;
  }
  const theme = useThemeContext();
  const handleClick = () => {
    getIdPersonaje(character.id);
  };

  return (
    <div className="card" data-testid='character-card'>
      <p> {theme} </p>
      <img src={character.image} className="card-img-top" alt="{character.name}" />
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
