import React from "react";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Cards({ characters, onClose, favorites, addToFavorites, removeFromFavorites }) {
  
  return (
    <div className={styles.container}>
      {characters.map((element, index) => {
        return (
          <Card
            element={element}
            onClose={onClose}
            key={index}
            inFocus={index === element.id}
          isFavorite={favorites.includes(element.id)}
          AddToFavorites={addToFavorites}
          RemoveFromFavorites={removeFromFavorites}
          />
        );
      })}
    </div>
  );
}
