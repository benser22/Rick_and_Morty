import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Card from "../Card/Card";

// Acciones de Redux
import { removeFromFavorites, orderCards, filterCards } from "../../redux/actions/favoritesActions";

// Estilos
import styles from "../Cards/Cards.module.css";
import stylesHeader from "./Favorites.module.css";

export default function Favorites({ characters }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const order = useSelector((state) => state.order.order);
  const genderFilter = useSelector((state) => state.filter.genderFilter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let amount = "";

  // Remuevo un elemento de mis favoritos
  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  let favoriteCharacters = [...characters];

  // Ordeno mis personajes favoritos según mi preferencia (ascendente o descendente)
  if (order === "A") {
    favoriteCharacters.sort((a, b) => b.id - a.id); // Orden ascendente
  } else if (order === "D") {
    favoriteCharacters.sort((a, b) => a.id - b.id); // Orden descendente
  }

  // Aplico un filtro por género si he seleccionado alguna opción. Por defecto, se muestran todas las cartas
  if (genderFilter) {
    favoriteCharacters = favoriteCharacters.filter(
      (element) => element.gender === genderFilter
    );
  }

  favoriteCharacters = favoriteCharacters.filter((element) =>
    favorites.includes(element.id)
  );

  favoriteCharacters.length === 1 ? (amount = "card") : (amount = "cards");

  // Manejo del cambio en la opción de ordenamiento
  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
  };

  // Manejo del cambio en el filtro por género
  const handleGenderFilterChange = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div className={stylesHeader.container}>
        <FaHome
          className={stylesHeader.home}
          onClick={() => navigate("/home")}
        />
        <h2 className={stylesHeader.title}>
          Tienes {favoriteCharacters.length} {amount} en tus Favoritos
        </h2>
      </div>
      <div className={stylesHeader.select_container}>
        <label>Ordenar por:</label>
        <select value={order} onChange={handleOrderChange}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <label>Filtrar por:</label>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
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
