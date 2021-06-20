import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home'
import MoviesCard from './components/MoviesCard'
import Detail from './components/Detail'

function App() {
  
  return (
    <div className="App">
          
          <Router>
		      <Route  path='/'   component={Home} />
          <Route  path='/movieliste'  exact component={MoviesCard}  />
          <Route exact path="/movieliste/:id" component={Detail}/>
          </Router>
          
    </div>
  );
}

export default App;
