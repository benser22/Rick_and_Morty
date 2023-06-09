import styles from './SearchBar.module.css';
import React from "react";
import ramtitle from '../../assets/images/title.webp'

export default function SearchBar(props) {
  return (
    <div className={styles.search_style}>
       <img
          className={styles.imageBar}
          src={ramtitle}
          alt={"Title Rick and Morty"}
        />
      <input autoComplete="off" type="search" id="id" name="q" />
      <button onClick={props.onSearch} className={styles.mybutton}>
        Buscar
      </button>
    </div>
  );
}
