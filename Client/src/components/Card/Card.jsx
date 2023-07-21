import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Card({
  element,
  onClose,
  isFavorite,
  AddToFavorites,
  RemoveFromFavorites,
  isArrayFavorites,
}) {
  // Manipula lista de favoritos con las funciones de redux que recibí por parametro
  const handleToggleFavorite = () => {
    if (isFavorite) {
      RemoveFromFavorites(element.id); // Si ya es favorito, se remueve de la lista de favoritos
    } else {
      AddToFavorites(element); // Si no es favorito, se agrega a la lista de favoritos
    }
  };

  return (
    <div className={styles.myDiv} data-testid="card">
      <div className={styles.buttonContainer}>
        {/* Botón de favorito */}
        {!isArrayFavorites && (
          <FaHeart
            data-testid="heart-icon"
            className={`${styles.heartIcon} ${
              isFavorite ? styles.favorite : ""
            }`}
            onClick={handleToggleFavorite}
          />
        )}
        <button
          className={styles.myButton}
          onClick={() => {
            onClose(element.id); // Cierra el componente al hacer clic en el botón de cierre
          }}
        >
          X
        </button>
      </div>
      <Link
        to={`/detail/${element.id}`}
        style={{ textDecoration: "none", color: "white" }} // A veces uso estilo in-line cuando lo amerita
      >
        <h3 className={styles.title}>
          {element.id} - {element.name}
        </h3>
      </Link>
      <img className={styles.picture} src={element.image} alt="character R&M" />
    </div>
  );
}
