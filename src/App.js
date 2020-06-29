import React from 'react';
import './App.css';
import { Component, Fragment } from 'react';
import CardList from "./components/CardList/CardList.js"
import SearchBox from "./components/SearchBox/SearchBox.js"
import Header from "./components/Header/Header.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <Fragment >
        <Header />
        <SearchBox onSearchChange={this.onSearchChange} />
        <div>
          <CardList monsters={filteredMonsters} />
        </div>
      </Fragment>
    );
  }
}

export default App;