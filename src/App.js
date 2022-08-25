import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import Header from './components/Header/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider } from './providers/ThemeProvider';

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
    <ThemeProvider>
      <div className="App">
      <Header />
      { loading && <p>Loading...</p> }
      { data?.map(character => (
        <Card
          character={character}
          key={character.id}
          getIdPersonaje={getIdPersonaje}
        />
      ))}
    </div>
    </ThemeProvider>
  );
};

export default App;
