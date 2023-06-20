import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import  stylesHeader from "./Favorites.module.css"

export default function Favorites({ characters, onClose }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let cantidad = "";

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const favoriteCharacters = characters.filter((element) =>
    favorites.includes(element.id)
  );

  favoriteCharacters.length === 1 ? cantidad = "carta" : cantidad = "cartas"

  return (
    <>
    <div>
        <FaHome className={stylesHeader.home} onClick={() => navigate("/home")}/>
        <h2 className={stylesHeader.title}>Tienes {favoriteCharacters.length} {cantidad} en Favoritos</h2>
      <hr></hr>
    </div>
    <div className={styles.container}>
      {favoriteCharacters.map((element) => (
        <Card
          element={element}
          onClose={handleRemoveFromFavorites}
          key={element.id}
          isFavorite={true}
          isArrayFavorites={true}
          RemoveFromFavorites={handleRemoveFromFavorites}
        />
      ))}
    </div>
    </>
  );
}
