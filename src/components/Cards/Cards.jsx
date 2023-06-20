import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoritesActions";

const Cards = ({ characters, onClose, favorites, addToFavorites, removeFromFavorites }) => {
  return (
    <div className={styles.container}>
      {characters.map((element, index) => {
        const isFavorite = favorites.includes(element.id); // Verificar si el elemento está en favoritos
        return (
          <Card
            element={element}
            onClose={onClose}
            key={index}
            inFocus={index === element.id}
            isFavorite={isFavorite} // Pasar el estado de favorito correctamente
            AddToFavorites={addToFavorites} // Utilizar el nombre correcto de la acción
            RemoveFromFavorites={removeFromFavorites} // Utilizar el nombre correcto de la acción
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites, // Asegurarse de obtener el estado correcto de favoritos
});

export default connect(mapStateToProps, { addToFavorites, removeFromFavorites })(Cards);
