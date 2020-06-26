import React from 'react';
import './App.css';
import { Component, Fragment } from 'react';
import CardList from "./components/CardList/CardList.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  displayState() {
    console.log(this.state.monsters)
  }

  render() {
    return (
      <Fragment >
        <div onClick={this.displayState()}>
          <CardList monsters={this.state.monsters} />
        </div>
      </Fragment>
    );
  }
}

export default App;