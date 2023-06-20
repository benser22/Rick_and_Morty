import styles from "./Card.module.css";
import React from "react";
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
  
  const handleToggleFavorite = () => {
    if (isFavorite) {
      RemoveFromFavorites(element.id);
    } else {
      AddToFavorites(element.id);
    }
  };

  return (
    <div className={styles.myDiv}>
      <div className={styles.buttonContainer}>
        {!isArrayFavorites && (
          <FaHeart
            className={`${styles.heartIcon} ${isFavorite ? styles.favorite : ""}`}
            onClick={handleToggleFavorite}
          />
        )}
        <button className={styles.myButton} onClick={() => onClose(element.id)}>
          X
        </button>
      </div>
      <Link
        to={`/detail/${element.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h3 className={styles.title}>
          {element.id} - {element.name}
        </h3>
      </Link>
      <img className={styles.picture} src={element.image} alt="character R&M" />
    </div>
  );
}
