import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar.js';

import Home from './pages/Home.js';
import Index from './pages/Index.js';
import Show from './pages/Show.js';
import New from './pages/New';
import { apiURL } from './util/apiURL'

const API = apiURL()

const App = () => {
  const [transactions, setTransactions] = useState([]);

   useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then(
                response =>
                    setTransactions(response.data),
                error =>
                    console.log("get", error)
            )
            .catch((c) => console.warn("catch", c));
    }, []);
  return (
    <div>
      <Navbar />
      <Switch>
        
        <Router
          exact path='/'>
          <Home />
        </Router>

        <Router
          path='/transactions'>
          <Index transactions={transactions}/>
        </Router>

        <Router
          path='/transactions/:index'>
          <Show />
        </Router>

        <Router path='/new'>
          <New />
        </Router>
        
      </Switch>
    </div>
  )
}

export default App


