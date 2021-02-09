import React, { Component } from 'react'
import Movies from './Components/Movies';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Movies />
        </div>
      </div>
    );
  }
}


export default App;
