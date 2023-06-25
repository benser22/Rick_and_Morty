import React from "react";
import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import styles from "./Home.module.css";

const Home = ({ onClose, characters }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (character) => {
    dispatch(addToFavorites(character));
  };

  const handleRemoveFromFavorites = (characterId) => {
    dispatch(removeFromFavorites(characterId));
  };

  return (
    <div>
      <h2 className={styles.title}>HOME</h2>
      <hr className={styles.myhr}></hr>
      <div className={styles.container}>
        <Cards
          characters={characters}
          onClose={onClose}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
        />
      </div>
      <hr className={styles.myhr}></hr>
    </div>
  );
};

export default Home;
