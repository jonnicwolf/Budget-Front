import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.js';

import Home from './pages/Home.js';
import Index from './pages/Index.js';
import New from './pages/New';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        
        <Router
          exact path='/'>
          <Home />
        </Router>

        <Router
          exact path='/transactions'>
          <Index/> 
        </Router>

        <Router path='/new'>
          <New />
        </Router>
        
      </Switch>
    </div>
  )
}

export default App


