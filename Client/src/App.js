import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

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
import { addFav, removeFav, removeAllFavorites } from "./redux/actions/actions";

import data from "../src/utils/data";

// * FUNCION PRINCIPAL
export default function App() {
  const [characters, setCharacters] = useState([]);
  const favorites = useSelector((state) => state.favorites);
  const location = useLocation();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  // Función de agregar un personaje
  async function onSearch(id) {
    if (id === "0") {
      if (characters.find((character) => character.id === id)) {
        window.alert("This character already exists!");
      } else {
        setCharacters((oldChars) => [...oldChars, data[0]]);
      }
    } else {
      try {
        await axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
          ({ data }) => {
            if (characters.find((character) => character.id === data.id)) {
              window.alert("This character already exists!");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          }
        );
      } catch (error) {
        console.error(error.message);
        if (error.request.status === 404) {
          window.alert("The API query had an error");
        } else {
          window.alert(`There is no character with the id ${id}`);
        }
      }
    }
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
          element={
            <Home
              characters={characters}
              onClose={onClose}
              handleEraseAll={handleEraseAll}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onClose={onClose}
              addFav={addFav}
              removeFav={removeFav}
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
