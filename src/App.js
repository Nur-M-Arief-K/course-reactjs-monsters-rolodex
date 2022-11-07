import { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ""
    };    
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => ({monsters: users}),
          () => console.log(this.state)
        ))
  };

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => ({searchField}));
  };

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className='App'>
        <input 
          type="search" 
          className="search-box" 
          placeholder="search monster"
          onChange={onSearchChange}
        />

        {filteredMonsters.map(
            monster => <div key={monster.id}><h1>{monster.name}</h1></div>
          )}
      </div>
    )
  }

};

export default App;
