import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { FaRandom } from "react-icons/fa";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (searchValue > 0 && searchValue <= 826) {
      props.onSearch(searchValue);
      setSearchValue("");
      redirectToHome();
    } else {
      window.alert("The Id must be a number between 1 and 826");
    }
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomId.toString());
    redirectToHome();
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
    <div>
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
        className={styles.myinput}
      />
      <button onClick={handleSearch} className={styles.mybutton}>
        Add
      </button>
    </div>
  );
}
