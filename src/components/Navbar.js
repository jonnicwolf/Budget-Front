import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";


export default function Navbar() {

  return (
      <div>
          <Route
            exact path='/'>
              <Link to='/home'>Budget App</Link>
          </Route>
          <Route
            path='/new'
            component>
              <Link to='/new'>New Transactions</Link>
          </Route>
    </div>
  );
}
