import React, { useState, useEffect } from 'react'; // Importing useState and useEffect from React lib
import './App.css';

// importing Axios to make requests to the API
import axios from 'axios';
// importing the character component
import Character from './components/Character';
// importing styled components
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]); // state for the characters from the API

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <AppContainer className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => <Character key={character.name} character={character} />)
      }
    </AppContainer>
  );
}

export default App;
