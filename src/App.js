import React, { Component } from 'react'
import Header from './Components/Header';
import Accueil from './Components/Accueil';
import Movies from './Components/Movies';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Accueil} />
        <Route path="/Movies" exact component={Movies} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Blog" exact component={Blog} />
      </Router>
    </div>
  );
}



export default App;
