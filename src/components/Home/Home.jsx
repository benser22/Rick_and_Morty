import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Favorites from "../Favorites/Favorites";
export default function Home({ characters, onClose }) {
  const [favorites, setFavorites] = useState([]); // Inicializa el estado de favoritos como un array vacío

  const addToFavorites = (id) => {
    // Agrega el ID del elemento a la lista de favoritos
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFromFavorites = (id) => {
    // Elimina el ID del elemento de la lista de favoritos
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favoriteId) => favoriteId !== id)
    );
  };

  console.log("Favoritos:", favorites);

  return (
    <>
      <Cards
        characters={characters}
        onClose={onClose}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      <Favorites
        favorites={favorites}
        characters={characters}
        onClose={onClose}
        onAddToFavorites={addToFavorites}
        onRemoveFromFavorites={removeFromFavorites}
      />
    </>
  );
}
