import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { addToFavorites, removeFromFavorites } from "./redux/actions/favoritesActions";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "./localStorageUtils";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("There are no characters with this ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  useEffect(() => {
    // Obtener datos guardados del Local Storage al cargar la aplicación
    const savedCharacters = getDataFromLocalStorage("characters");
    if (savedCharacters) {
      setCharacters(savedCharacters);
    }
  }, []);

  useEffect(() => {
    // Guardar datos en el Local Storage cada vez que los personajes cambien
    saveDataToLocalStorage("characters", characters);
  }, [characters]);

  return (
    <Provider store={store}>
      <div className="App">
        {location.pathname !== '/' && <Nav onSearch={onSearch} userData={userData}/>}
        <Routes>
          <Route path="/" element={<Form userData={userData} setUserData={setUserData}/>} />
          <Route
            path="/home"
            element={<Home characters={characters} onClose={onClose} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                characters={characters}
                onClose={onClose}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error404 navigate={Navigate} />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
