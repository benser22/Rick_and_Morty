import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import ramtitle from "../../assets/images/title.webp";
import styles from "./Nav.module.css"

function Nav(props) {
  return (
    <div className={styles.search_style}>
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt="Title Rick and Morty"
        />
      </NavLink>
      <NavLink to={"/favorites"} style={{ textDecoration: "none" }}>
        <label className={styles.about}>Favorites</label>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <label className={styles.about}>About</label>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Nav;
