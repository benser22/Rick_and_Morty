import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import ramtitle from "../../assets/images/title.webp";
import styles from "./Nav.module.css";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../localStorageUtils";

function Nav(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Obtener el valor del email del Local Storage al cargar el componente
    const storedEmail = getDataFromLocalStorage("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setEmail(props.userData.email);
      saveDataToLocalStorage("email", props.userData.email);
    }
  }, [props.userData.email]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.search_style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt="Title Rick and Morty"
        />
      </NavLink>
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
      >
        {isHovered ? (
          <label className={styles.logout}>Logout</label>
        ) : (
          <label className={styles.mail}>
            {email}
          </label>
        )}
      </NavLink>
      <NavLink to={"/favorites"} style={{ textDecoration: "none" }}>
        <label className={`${styles.about} ${styles.favorite}`}>
          Favorites
        </label>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <label className={styles.about}>About</label>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Nav;
