// favoritesStorage.js
const getFavoritesFromStorage = () => {
    try {
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        return JSON.parse(favorites);
      }
    } catch (error) {
      console.error('Error al obtener los favoritos del local storage:', error);
    }
    return [];
  };
  
  const saveFavoritesToStorage = (favorites) => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error al guardar los favoritos en el local storage:', error);
    }
  };
  
  export { getFavoritesFromStorage, saveFavoritesToStorage };
  