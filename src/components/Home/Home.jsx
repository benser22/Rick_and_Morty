import React, { useState } from "react";
import Cards from "../Cards/Cards";
// import Favorites from "../Favorites/Favorites";

export default function Home({ characters, onClose }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favoriteId) => favoriteId !== id)
    );
  };

  return (
    <>
      <Cards
        characters={characters}
        onClose={onClose}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      {/* <Favorites
        favorites={favorites}
        characters={characters}
        onClose={onClose}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      /> */}
    </>
  );
}
