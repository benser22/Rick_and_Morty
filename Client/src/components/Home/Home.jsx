import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Componente de las tarjetas
import Cards from "../Cards/Cards";

// Acciones de Redux
import { addFav, removeFav } from "../../redux/actions/actions";

// Estilos
import styles from "./Home.module.css";

import { FaArrowUp } from "react-icons/fa";

const Home = ({ onClose, characters, handleEraseAll }) => {
  const dispatch = useDispatch();
  const [showAnchor, setShowAnchor] = useState(false);

  // Función para desplazarse hacia arriba
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Función para agregar a favoritos
  const handleAddToFavorites = (character) => {
    dispatch(addFav(character));
  };

  // Función para remover de favoritos
  const handleRemoveFromFavorites = (characterId) => {
    dispatch(removeFav(characterId));
  };

  useEffect(() => {
    // Manejar el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 800) {
        // Mostrar el icono de ancla cuando se desplaza hacia abajo más de 800 píxeles
        setShowAnchor(true);
      } else {
        // Ocultar el icono de ancla cuando se desplaza hacia arriba por debajo de 800 píxeles
        setShowAnchor(false);
      }
    };

    // Agregar el event listener de scroll cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Remover el event listener de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div data-testid="home-component">
      <h2 className={styles.title}>HOME</h2>
      <button className={styles.myButton} onClick={handleEraseAll}>Delete All</button>
      <hr className={styles.myhr}></hr>
      {showAnchor && (
        // Mostrar el icono de ancla solo cuando showAnchor es verdadero
        <div className={styles.anchor} onClick={handleScrollToTop}>
          <FaArrowUp className={styles.anchorIcon} />
        </div>
      )}
      <div className={styles.container}>
        <Cards
          characters={characters}
          onClose={onClose}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
        />
      </div>
      <hr className={styles.myhr}></hr>
    </div>
  );
};

export default Home;
