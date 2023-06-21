import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import ramtitle from "../../assets/images/title.webp";
import styles from "./Nav.module.css";

function Nav(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.search_style} >
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt="Title Rick and Morty"
        />
      </NavLink>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered && (
          <NavLink to="/" className={styles.logout}>
            Logout
          </NavLink>
        )}
        {!isHovered && (
          <label style={{ color: "lightblue"}}>
            {props.userData.email}
          </label>
        )}
      </div>
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
