import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { useThemeContext, useThemeToggleContext } from './providers/ThemeProvider';
import { setThemeLight } from './app/ThemeProviderRedux';

const App = () => {
  const [idPersonaje, setIdPersonaje] = useState(null);
  const [dataPersonajeById, setDataPersonajeById] = useState(null);
  const themeRedux = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(themeRedux);
  const theme = useThemeContext();
  const setTheme = useThemeToggleContext();

  const dataPersonajes = useFetch('https://rickandmortyapi.com/api/character');

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
      <button onClick={() => dispatch(setThemeLight())}>Cambiar tema</button>
      <Counter />
    </div>
  );
};

export default App;
