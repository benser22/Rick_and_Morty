import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoritesActions";

const Cards = ({ onClose, characters }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleAddToFavorites = (character) => {
    dispatch(addToFavorites(character));
  };

  const handleRemoveFromFavorites = (characterId) => {
    dispatch(removeFromFavorites(characterId));
  };

  return (
    <div className={styles.container}>
      {characters.map((element, index) => {
        const isFavorite = favorites.includes(element.id); 
        return (
          <Card
            element={element}
            onClose={onClose}
            key={index}
            inFocus={index === element.id}
            isFavorite={isFavorite} 
            AddToFavorites={handleAddToFavorites} 
            RemoveFromFavorites={handleRemoveFromFavorites} 
          />
        );
      })}
    </div>
  );
};

export default Cards;
