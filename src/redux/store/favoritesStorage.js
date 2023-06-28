/* 
 ? Utilizo este archivo para guardar datos en local storage y así mantener persistencia de datos
*/

// Función para obtener los favoritos desde el almacenamiento local
const getFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      return JSON.parse(favorites);
    }
  } catch (error) {
    console.error('Error getting bookmarks from local storage:', error);
  }
  return [];
};

// Función para guardar los favoritos en el almacenamiento local
const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to save favorites to local storage:', error);
  }
};

export { getFavoritesFromStorage, saveFavoritesToStorage };
