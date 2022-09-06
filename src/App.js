import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [idPersonaje, setIdPersonaje] = useState(1);

  const dataPersonajes = useFetch('https://rickandmortyapi.com/api/character');
  const dataPersonajeId = useFetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = () => {
    console.log(dataPersonajeId);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  return (
    <div className="App">
      { dataPersonajes?.loading && <p>Loading...</p> }
      { dataPersonajes?.data?.results.map(character => (
        <Card
          character={character}
          key={character.id}
          getIdPersonaje={getIdPersonaje}
        />
      ))}
    </div>
  );
};

export default App;
