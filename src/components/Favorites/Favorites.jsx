import React from "react";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Favorites({ characters, onClose, favorites, addToFavorites, removeFromFavorites }) {
  const favoriteCharacters = characters.filter((element) => favorites.includes(element.id));

  return (
    <div className={styles.container}>
      {favoriteCharacters.map((element) => (
        <Card
          element={element}
          onClose={onClose}
          key={element.id}
          isFavorite={true}
          onAddToFavorites={addToFavorites}
          onRemoveFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  );
}
