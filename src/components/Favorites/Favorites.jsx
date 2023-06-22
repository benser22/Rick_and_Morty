import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import stylesHeader from "./Favorites.module.css";

export default function Favorites({ characters, onClose }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let amount = "";

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const favoriteCharacters = characters.filter((element) =>
    favorites.includes(element.id)
  );

  favoriteCharacters.length === 1 ? (amount = "card") : (amount = "cards");

  return (
    <>
      <div className={stylesHeader.container}>
        <FaHome
          className={stylesHeader.home}
          onClick={() => navigate("/home")}
        />
        <h2 className={stylesHeader.title}>
          You have {favoriteCharacters.length} {amount} in Favorites
        </h2>
      </div>
      <hr style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}></hr>
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
      <hr style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}></hr>
    </>
  );
}
