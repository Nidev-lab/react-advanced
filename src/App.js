import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacter = async () => {
    setIsLoading(true);

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="App">
      { isLoading && <p>Loading...</p> }
      { characters?.map(character => <p key={character.id}>{character.type}</p>) }
    </div>
  );
};

export default App;
