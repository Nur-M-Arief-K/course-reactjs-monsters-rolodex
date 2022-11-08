import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monstersArr = 
        await getData<Monster[]> ("https://jsonplaceholder.typicode.com/users");

      setMonsters(monstersArr);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(searchField));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          type="search" 
          className="search-box" 
          placeholder="search monster"
          onSearchChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
