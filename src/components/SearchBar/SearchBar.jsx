import React, { useState } from "react";
import ramtitle from "../../assets/images/title.webp";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { FaRandom } from "react-icons/fa";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(searchValue);
    setSearchValue(""); // Limpiar el campo de entrada
    redirectToHome();
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const confirmAdd = window.confirm(`Add character with ID ${randomId}?`);
    if (confirmAdd) {
      props.onSearch(randomId.toString());
      redirectToHome();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.search_style}>
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt="Title Rick and Morty"
        />
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <span className={styles.about}>About</span>
      </NavLink>
      <span onClick={handleRandom} className={styles.randomLink}>
        <FaRandom className={styles.randomIcon} />
      </span>
      <input
        autoComplete="off"
        type="search"
        id="id"
        name="q"
        value={searchValue}
        placeholder="Id..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className={styles.mybutton}>
        Add
      </button>
    </div>
  );
}
