import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { FaRandom } from "react-icons/fa";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // Maneja el cambio en el valor del campo de búsqueda
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Agrega un personaje con la funcion onSearch recibida por props
  const handleSearch = () => {
    // if (searchValue > 0 && searchValue <= 826) {
      props.onSearch(searchValue);
      setSearchValue("");
      redirectToHome();
    // } else {
    // }
  };

  // Agrega un personaje aleatorio
  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826);
    props.onSearch(randomId.toString());
    redirectToHome();
  };

  // Maneja el evento de presionar la tecla Enter cuando estoy en el input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.divSearch}>
      <span onClick={handleRandom} className={styles.randomLink}>
        <FaRandom className={styles.randomIcon} />
      </span>
      <input
        autoComplete="off"
        type="text"
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
