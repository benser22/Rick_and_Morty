import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Card from "../Card/Card";

// Estilos
import styles from "../Cards/Cards.module.css";
import stylesHeader from "./Favorites.module.css";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const order = useSelector((state) => state.order);
  const genderFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let amount = "";

  useEffect(() => {
    dispatch({ type: "ORDER", payload: "A" }); // Establecer orden ascendente
    dispatch({ type: "FILTER", payload: "" }); // Establecer filtro en "All"
  }, [dispatch]);

  const handleRemoveFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  let favoriteCharacters = [...favorites];

  if (order === "A") {
    favoriteCharacters.sort((a, b) => b.id - a.id); // Orden ascendente
  } else if (order === "D") {
    favoriteCharacters.sort((a, b) => a.id - b.id); // Orden descendente
  }

  if (genderFilter) {
    favoriteCharacters = favoriteCharacters.filter(
      (element) => element.gender === genderFilter
    );
  }

  favoriteCharacters.length === 1 ? (amount = "card") : (amount = "cards");

  const handleOrderChange = (e) => {
    dispatch({ type: "ORDER", payload: e.target.value });
  };

  const handleGenderFilterChange = (e) => {
    dispatch({ type: "FILTER", payload: e.target.value });
  };

  const handleEraseAll = () => {
    dispatch({ type: "REMOVE_ALL_FAVORITES" });
  };

  return (
    <>
      <div className={stylesHeader.container}>
        <FaHome
          className={stylesHeader.home}
          onClick={() => navigate("/home")}
        />
        <h2 className={stylesHeader.title}>
          You have {favoriteCharacters.length} {amount}
        </h2>
      </div>
      <div className={stylesHeader.select_container}>
        <label>Order by:</label>
        <select value={order} onChange={handleOrderChange}>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>
        <label>Filter by:</label>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button onClick={handleEraseAll} className={stylesHeader.myButton}>
          Clear All Favorites
        </button>
      </div>
      <hr className={stylesHeader.myhr}></hr>
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
