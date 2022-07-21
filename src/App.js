import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacter = async () => {
    setIsLoading(true);

    const { data } = await axios("https://rickandmortyapi.com/api/character");
    setCharacters(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {characters?.map((character) => (
        <div key={character.id} className='imgContainer'>
          <p >{character.type}</p>
          {character.type && <img src={character.image} alt="" width='100'/>}
        </div>
      ))}
    </div>
  );
};

export default App;
