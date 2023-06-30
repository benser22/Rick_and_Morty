import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// Estilos
import "./App.css";

// Componentes
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

// Redux
import {
  addToFavorites,
  removeFromFavorites,
  removeAllFavorites
} from "./redux/actions/favoritesActions";

// Utilidades
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "./localStorageUtils";

// * FUNCION PRINCIPAL
export default function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  // Función de agregar un personaje
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (characters.find((character) => character.id === data.id)) {
            window.alert("This character already exists!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("There are no characters with this ID!");
        }
      }
    );
  }

  // Función para eliminar todos los personajes
  function handleEraseAll() {
    dispatch(removeAllFavorites()); // Me aseguro que cuando se eliminen todas las cartas, también pierdan su estado de favorito si es que lo tuvieran
    setCharacters([]); // Seteo mi array con los personajes a vacío y así eliminar todas las cartas
  }

  // Función de eliminar un personaje
  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  // Cargar datos del Local Storage al iniciar la aplicación
  useEffect(() => {
    const savedCharacters = getDataFromLocalStorage("characters");
    if (savedCharacters) {
      setCharacters(savedCharacters);
    }
  }, []);

  // Guardar datos en el Local Storage cuando los personajes cambien
  useEffect(() => {
    saveDataToLocalStorage("characters", characters);
  }, [characters]);

  return (
      <div className="App">
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} userData={userData} />
        )}
        <Routes>
          <Route
            path="/"
            element={<Form userData={userData} setUserData={setUserData} />}
          />
          <Route
            path="/home"
            element={<Home characters={characters} onClose={onClose} handleEraseAll={handleEraseAll}/>}
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
  );
}
