// localStorageUtils.js

// Guardar datos en el Local Storage
export function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Obtener datos del Local Storage
  export function getDataFromLocalStorage(key) {
    try {
      const serializedData = localStorage.getItem(key);
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error retrieving data from Local Storage:', error);
      return null;
    }
  }
  