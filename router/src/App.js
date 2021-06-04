import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Home'
import MoviesCard from './MoviesCard'
import Detail from './Detail'

function App() {
  const posts =[
    {
      id:1,
      des:"La cinquième saison sera la dernière de la série, a annoncé le créateur, Alex Pina cet été. Au programme ? 10 épisodes plus fous les uns que les autres avec.",
      video:<iframe width="640" height="360" src="https://www.youtube.com/embed/_yJxbWKN3zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
      id:2,
      des:"Lorsque les adolescents Harry et June fuient leurs familles répressives pour être ensemble, ils sont déraillés par une découverte extraordinaire",
      video:<iframe width="640" height="360" src="https://www.youtube.com/embed/zQ0mtlwoWFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
      id:3,
      des:"C est le film réalisé par une femme qui a fait le meilleur démarrage de l histoire du cinéma devant «50 shades of Grey» de Sam Taylor-Wood.",
      video:<iframe width="640" height="360" src="https://www.youtube.com/embed/ECTqqXBceG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
      id:4,
      des:"Christopher Nolan nous a livré, avec Batman Begins (2005), The Dark Knight (2008) et The Dark Knight Rises (2012), une trilogie cinématographique d’envergure",
      video:<iframe width="640" height="360" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }
  ]
  return (
    <div className="App">
          
          <Router>
		      <Route  path='/'   component={Home} />
          <Route  path='/movieliste'  exact component={MoviesCard}  />
          <Route exact path="/movieliste/:id" render={({match}) => (<Detail post={posts.find(p => p.id === match.params.id)} />
              )} />
          </Router>
    </div>
  );
}

export default App;
