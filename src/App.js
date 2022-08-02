import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [idPersonaje, setIdPersonaje] = useState(1);

  const { data, loading } = useFetch('https://rickandmortyapi.com/api/character');

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = () => {
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  return (
    <div className="App">
      { loading && <p>Loading...</p> }
      { data?.map(character => (
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
