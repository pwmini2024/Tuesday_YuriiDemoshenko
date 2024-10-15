import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar'
import CharactersList from './components/CharactersList'
import CharacterForm from './components/CharacterForm'

import { peopleData } from './data.js';

function App() {
  const [people, setPeople] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('http://localhost:3000/events');
      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setPeople((people) => people.concat(parsedData));
      };
    }
    setListening(true);
  }, [listening, people])

  const addCharacterHandler = (e) => {
    e.preventDefault();
    console.log("Adding charaters");
  }

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("Search performed ");
  }

  return (
    <>
      <SearchBar searchHandler={searchHandler}/>
      <CharactersList peopleData={people}/>
      <CharacterForm addCharacterHandler={addCharacterHandler}/>
    </>
  )
}

export default App
