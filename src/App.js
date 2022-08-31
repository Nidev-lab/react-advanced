import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider, useThemeContext } from './providers/ThemeProvider';

const App = () => {
  const [idPersonaje, setIdPersonaje] = useState(null);
  const theme = useThemeContext();

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
      <Header />
      { dataPersonajes?.loading && <p>Loading...</p> }
      { dataPersonajes?.data?.results.map(character => (
        <>
          <Card
            {...character}
            key={character.id}
            getIdPersonaje={getIdPersonaje}
            theme={theme}
          />
          {
            dataPersonajeId && <p>{dataPersonajeId?.data?.name}</p>
          }
        </>
      ))}
      <Counter />
    </div>
  );
};

export default App;
