import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Card } from './components/Card';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(1);

  const getCharacter = async () => {
    setIsLoading(true);

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = async () => {
    const { data } = await axios(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    console.log(data);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  return (
    <div className="App">
      { isLoading && <p>Loading...</p> }
      { characters?.map(character => (
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
