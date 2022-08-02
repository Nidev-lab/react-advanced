import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(1);

  const { data } = useFetch('https://rickandmortyapi.com/api/character');

  const getCharacter = async () => {
    setIsLoading(true);
    setCharacters(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = async () => {
    console.log(data);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  console.log(characters);
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
