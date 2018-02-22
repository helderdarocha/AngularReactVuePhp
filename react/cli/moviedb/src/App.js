import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DirectorList } from './components/DirectorList';
import { ActorList } from './components/ActorList';
import { MovieList } from './components/MovieList';
import { MovieDBService } from './services/MovieDBService'

class App extends Component {

  state = null;
  
  componentDidMount = () => {
     new MovieDBService().getAll()
         .then(res => {
             this.setState(res);
         });
  }

  render() {
    console.log(this.state)
    if(this.state) {
      return (
          <div>
              <MovieList data={this.state.movies} />
              <hr />
              <ActorList data={this.state.actors} />
              <hr />
              <DirectorList data={this.state.directors} />
          </div>
      )
    } else {
      return (<div></div>);
    }
  }
}

export default App;
