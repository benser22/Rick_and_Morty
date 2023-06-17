import React from "react";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { useNavigate } from "react-router-dom";

export default function Favorites({ characters, onClose, favorites, removeFromFavorites }) {
  const favoriteCharacters = characters.filter((element) => favorites.includes(element.id));
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {favoriteCharacters.map((element) => (
        <Card
          element={element}
          onClose={onClose}
          key={element.id}
          isFavorite={true}
          onRemoveFromFavorites={removeFromFavorites}
        />
      ))}
      <button onClick={() => navigate("/home")}>Hola soy favorites</button>
    </div>
  );
}
