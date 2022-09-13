import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { useThemeContext, useThemeToggleContext } from './providers/ThemeProvider';
import { setThemeLight } from './app/themeProviderRedux';
import { setCharacters } from './app/characterProviderRedux';

const App = () => {
  const dataPersonajes = useFetch('https://rickandmortyapi.com/api/character');
  const [idPersonaje, setIdPersonaje] = useState(null);
  const [dataPersonajeById, setDataPersonajeById] = useState(null);
  const dataRedux = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(dataRedux);
  const theme = useThemeContext();
  const setTheme = useThemeToggleContext();

  if (idPersonaje) {
    const dataPersonajeId = useFetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    setDataPersonajeById(dataPersonajeId);
  }

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = () => {
    console.log(dataPersonajeById);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      { dataPersonajes?.loading && <p>Loading...</p> }
      {/* { dataPersonajes?.data?.results.map(character => (
        <>
          <Card
            {...character}
            key={character.id}
            getIdPersonaje={getIdPersonaje}
            theme={theme}
          />
          {
            dataPersonajeById && <p>{dataPersonajeById?.data?.name}</p>
          }
        </>
      ))} */}
      <button
        onClick={() => dispatch(setCharacters(dataPersonajes))}
      >
        Cambiar el Characters
      </button>
      <button onClick={() => dispatch(setThemeLight())}>Cambiar tema</button>
      <Counter />
    </div>
  );
};

export default App;
