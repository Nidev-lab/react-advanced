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
<<<<<<< HEAD
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
=======
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
>>>>>>> 08724e1452686ff9e2e5ddca36bf793fe22efe69
      </div>
    </div>
  );
};

export default Card;
