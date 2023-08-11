import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Estilos
import styles from "./Form.module.css";

// Validación
import validate from "./validation";

// Imagen del logo
import logo from "../../assets/images/logo_gira.gif";

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const login = async () => {
    const { email, password } = userData;
    const URL = "https://rickandmortyserver-production.up.railway.app/rickandmorty/login";
    try {
      const { data } = await axios.get(URL, { params: { email, password } });
      const { access } = data;
      if (access) {
        window.alert("You have successfully logged in");
        navigate("/home", { state: { email, password } });
      }
    } catch (error) {
      error.request.status === 403
        ? window.alert("The email or password is not correct")
        : window.alert(`${error.message}: The server doesn't respond`);
    }
  };

  const register = async () => {
    const { email, password } = userData;
    const URL = "https://rickandmortyserver-production.up.railway.app/rickandmorty/login";
    try {
      const response = await axios.post(URL, { email, password });
      console.log(response.data);
      if (response.status === 201) {
        setUserData({
          ...userData,
          email: email,
          password: password,
        });
        window.alert(`${email} was created successfully`);
      } else if (response.status === 200) {
        window.alert(`There is already a user with ${email}, try another email`);
      } else {
        throw new Error("Failed to create user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register();
  };

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
      <button className={styles.myButton} onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Form;
