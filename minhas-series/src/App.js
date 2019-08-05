import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Minhas importações
import Header from './Header'
import Home from './Home'
import Genres from './Genres'

function App () {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/genres' exact component={Genres} />
    </Router>
  )
}

export default App
