import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { addFav, removeFav } from "../../redux/actions/actions";

const Cards = ({ onClose, characters }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  
  const handleAddToFavorites = (character) => {
    dispatch(addFav(character));
  };

  const handleRemoveFromFavorites = (characterId) => {
    dispatch(removeFav(characterId));
  };

  return (
    <div className={styles.container}>
      {characters &&
        characters.map((element, index) => {
          const isFavorite = favorites.find((favorite) => Number(favorite.id) === Number(element.id));
          return (
            <Card
              element={element}
              onClose={onClose}
              key={index}
              inFocus={index === element.id}
              isFavorite={isFavorite !== undefined}
              AddToFavorites={handleAddToFavorites}
              RemoveFromFavorites={handleRemoveFromFavorites}
            />
          );
        })}
    </div>
  );
};

export default Cards;
