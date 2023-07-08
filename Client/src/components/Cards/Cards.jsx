import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";

// Utilizo aquí componente de Clases para tener otra variante de lo que aprendimos
class Cards extends React.Component {
  handleAddToFavorites = (character) => {
    // Función para agregar un personaje a la lista de favoritos
    this.props.addToFavorites(character);
  };

  handleRemoveFromFavorites = (characterId) => {
    // Función para remover un personaje de la lista de favoritos
    this.props.removeFromFavorites(characterId);
  };

  render() {
    const { onClose, characters, favorites } = this.props;

    return (
      <div className={styles.container}>
        {characters.map((element, index) => {
          // Mostrará el corazón pintado si esa carta está en favoritos
          const isFavorite = favorites.includes(element.id);
          return (
            <Card
              element={element}
              onClose={onClose}
              key={index}
              inFocus={index === element.id}
              isFavorite={isFavorite}
              AddToFavorites={this.handleAddToFavorites}
              RemoveFromFavorites={this.handleRemoveFromFavorites}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites, // Obtener la lista de favoritos desde el estado de Redux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Mapeao la acción addToFavorites
    addToFavorites: (character) => dispatch(addToFavorites(character)), 
    // Mapeao la acción removeFromFavorites
    removeFromFavorites: (characterId) => dispatch(removeFromFavorites(characterId)), 
  };
};

// Conecto el componente Cards con el estado y las acciones de Redux
export default connect(mapStateToProps, mapDispatchToProps)(Cards);

/*
* CON HOOKS!!! 

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoritesActions";

const Cards = ({ onClose, characters }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleAddToFavorites = (character) => {
    dispatch(addToFavorites(character));
  };

  const handleRemoveFromFavorites = (characterId) => {
    dispatch(removeFromFavorites(characterId));
  };

  return (
    <div className={styles.container}>
      {characters.map((element, index) => {
        const isFavorite = favorites.includes(element.id); 
        return (
          <Card
            element={element}
            onClose={onClose}
            key={index}
            inFocus={index === element.id}
            isFavorite={isFavorite} 
            AddToFavorites={handleAddToFavorites} 
            RemoveFromFavorites={handleRemoveFromFavorites} 
          />
        );
      })}
    </div>
  );
};

export default Cards;


*/
