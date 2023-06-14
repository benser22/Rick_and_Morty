import React, { useState } from "react";
import ramtitle from "../../assets/images/title.webp";
import { NavLink } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(searchValue);
  };

  return (
    <div className={styles.search_style}>
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt={"Title Rick and Morty"}
        />
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: 'none' }}>
        <span className={styles.about}>About</span>
      </NavLink>
      <input
        autoComplete="off"
        type="search"
        id="id"
        name="q"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className={styles.mybutton}>
        Agregar
      </button>
    </div>
  );
}
