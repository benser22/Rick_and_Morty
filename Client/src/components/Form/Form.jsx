import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Estilos
import styles from "./Form.module.css";

// Validación
import validate from "./validation";

// Imagen del logo
import logo from "../../assets/images/logo_gira.gif";

const Form = ({ userData, setUserData }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Función para manejar los cambios en los inputs
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  }

  const navigate = useNavigate();

  // Función para realizar el login
  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const {data} = await axios.get(URL, { params: { email, password } });
      const { access } = data;
      if (access) {
        window.alert("You have successfully logged in");
        navigate("/home", { state: { email, password } });
      } 
    } catch (error) {
     (error.request.status === 403) ? window.alert("The email or password is not correct") : window.alert(`${error.message}: The server doesn't respond`);
    }
  };

  // Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.container} data-testid="form-component">
      <img src={logo} alt="R&M logo" className={styles.picture} />
      <h2>LOGIN</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="myMail">E-mail:</label>
        <input
          placeholder="example@example.com"
          id="myMail"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={styles.myInput}
          autoComplete="username"
        />
        <p className={styles.error}>{errors.email}</p>
        <label htmlFor="myPass">Password:</label>
        <input
          id="myPass"
          autoComplete="current-password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={styles.myInput}
        />
        {!errors.email && <p className={styles.error}>{errors.password}</p>}
        <button type="submit" value="LOGIN" className={styles.myButton}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
