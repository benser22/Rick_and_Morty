import React, { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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

function App() {
  const [characters, setCharacters] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const login = (userData) => {
    console.log(userData);
    window.alert("Ud. se ha logueado correctamente");
    navigate("/home");
  };

  const handleFormSubmitted = (submitted) => {
    setFormSubmitted(submitted);
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <Provider store={store}>
      <div className="App">
        {formSubmitted && <Nav onSearch={onSearch} />}
        <Routes>
          <Route
            path="/"
            element={
              <Form
                userData={userData}
                handleChange={handleChange}
                login={login}
                setFormSubmitted={handleFormSubmitted}
              />
            }
          />
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
