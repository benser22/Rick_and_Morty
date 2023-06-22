import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import styles from "./Home.module.css";

const Home = ({ characters, onClose, addToFavorites, removeFromFavorites }) => {
  return (
    <div>
      <h2 className={styles.title}>HOME</h2>
      <hr style={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}></hr>
      <div className={styles.container}>
      <Cards
        characters={characters}
        onClose={onClose}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      </div>
      <hr style={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}></hr>
    </div>
  );
};

// Mapea el estado de Redux a las props del componente
const mapStateToProps = (state) => ({
  favorites: state.favorites, // Accede al estado 'favorites' en Redux
});

// Conecta el componente a Redux y mapea las acciones
export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
})(Home);
