import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/coaches">Coaches</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/requests">Requests</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-coach">Add Coach</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
