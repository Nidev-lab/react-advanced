import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider } from './providers/ThemeProvider';

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
<<<<<<< HEAD
    <ThemeProvider>
      <div className="App">
        <Header />
        { dataPersonajes?.loading && <p>Loading...</p> }
        { dataPersonajes?.data?.results.map(character => (
          <Card
            character={character}
            key={character.id}
            getIdPersonaje={getIdPersonaje}
          />
        ))}
      </div>
    </ThemeProvider>
=======
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
>>>>>>> parent of 4be37c5 (ej. clase 8)
  );
};

export default App;
