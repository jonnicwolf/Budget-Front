import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <nav>
        <NavLink to='/transactions'>Budget App</NavLink>
        <NavLink to='/new'>New Transactions</NavLink>
      </nav>
    </div>
  );
}
