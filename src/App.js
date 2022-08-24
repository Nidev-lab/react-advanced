import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
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
    <ThemeProvider>
      <div className="App">
        <Header />
        {/* { dataPersonajes?.loading && <p>Loading...</p> }
        { dataPersonajes?.data?.results.map(character => (
          <Card
            {...character}
            key={character.id}
            getIdPersonaje={getIdPersonaje}
          />
        ))} */}
        <Counter />
      </div>
    </ThemeProvider>
  );
};

export default App;
