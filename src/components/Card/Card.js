import classNames from 'classnames';
import React from 'react';
<<<<<<< HEAD
import { useThemeContext } from '../../providers/ThemeProviders';

const Card = ({ character, getIdPersonaje }) => {
  if (!character.name) {
    return null;
  }
  const theme = useThemeContext();
=======
import classNames from 'classnames';
import { useThemeContext } from '../../providers/ThemeProvider';

const Card = ({
  name, image, species, id, getIdPersonaje,
}) => {
  if (!name || !image) {
    return null;
  }

  const theme = useThemeContext();

>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c
  const handleClick = () => {
    getIdPersonaje(id);
  };

  return (
<<<<<<< HEAD
    <div className="card" data-testid='character-card'>
      <p> {theme} </p>
      <img src={character.image} className="card-img-top" alt="{character.name}" />
=======
    <div className="card" data-testid="character-card">
      <img src={image} className="card-img-top" alt={image} />
>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c
      <div className={classNames('card-body', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
<<<<<<< HEAD
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.species}</p>
=======
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species}</p>
>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c
          <button className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-success'}`} onClick={handleClick}>Go somewhere</button>
      </div>
    </div>
  );
};

export default Card;
