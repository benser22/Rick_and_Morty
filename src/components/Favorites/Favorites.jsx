import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Card from "../Card/Card";

// Acciones de Redux
import { removeFromFavorites, orderCards, filterCards, removeAllFavorites } from "../../redux/actions/favoritesActions";

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

  useEffect(() => {
    // Restablecer el orden y el filtro cada vez que el componente se monta, porque si no queda cargado cuando vuelvo a home y regreso a favoritos
    dispatch(orderCards("A")); // Establecer orden ascendente
    dispatch(filterCards("")); // Establecer filtro en "All"
    // eslint-disable-next-line
  }, []);

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

  // Manejo de eliminación de todos los estados favoritos
  const handleEraseAll = () => {
    dispatch(removeAllFavorites());
  }

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
        <button onClick={handleEraseAll} className={stylesHeader.myButton}>Clear All Favorites</button>
      </div>
      <hr className={stylesHeader.myhr} ></hr>
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
