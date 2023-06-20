import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import { useNavigate } from "react-router-dom";

export default function Favorites({ characters, onClose }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const favoriteCharacters = characters.filter((element) =>
    favorites.includes(element.id)
  );

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/home")}>Hola soy favorites</button>
      {favoriteCharacters.map((element) => (
        <Card
          element={element}
          onClose={handleRemoveFromFavorites}
          key={element.id}
          isFavorite={true}
          RemoveFromFavorites={handleRemoveFromFavorites}
        />
      ))}
    </div>
  );
}
