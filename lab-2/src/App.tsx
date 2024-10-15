import SearchBar from './components/SearchBar'
import CharactersList from './components/CharactersList'
import CharacterForm from './components/CharacterForm'

import { peopleData } from './data.js';

function App() {

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
      <CharactersList peopleData={peopleData}/>
      <CharacterForm addCharacterHandler={addCharacterHandler}/>
    </>
  )
}

export default App
