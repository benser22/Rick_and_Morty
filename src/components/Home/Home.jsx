import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoritesActions"; 

const Home = ({ characters, onClose, addToFavorites, removeFromFavorites }) => {
  return (
    <Cards
      characters={characters}
      onClose={onClose}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

// Mapea el estado de Redux a las props del componente
const mapStateToProps = (state) => ({
  favorites: state.favorites, // Accede al estado 'favorites' en Redux
});

// Conecta el componente a Redux y mapea las acciones
export default connect(mapStateToProps, { addToFavorites, removeFromFavorites })(Home);
