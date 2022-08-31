import React from 'react';
import classNames from 'classnames';

const Card = ({
  name, image, species, id, getIdPersonaje, theme,
}) => {
  if (!name || !image || !id || !species) {
    return null;
  }

  const handleClick = () => {
    getIdPersonaje(id);
  };

  return (
    <div className="card" data-testid="character-card">
      <img src={image} className="card-img-top" alt={image} />
      <div className={classNames('card-body', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species}</p>
          <button
            className={classNames('btn', {
              'btn-primary': theme === 'light',
              'btn-success': theme === 'dark',
            })}
            onClick={handleClick}
          >
            Go somewhere
          </button>
      </div>
    </div>
  );
};

export default Card;
