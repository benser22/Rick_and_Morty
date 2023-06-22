import React, { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validation";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_gira.gif";

const Form = ({ userData, setUserData }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  }

  const navigate = useNavigate();

  const login = (userData) => {
    if (
      userData.email === "benser22@gmail.com" &&
      userData.password === "password1"
    ) {
      window.alert("You have successfully logged in");
      navigate("/home");
    } else {
      window.alert("Email or password incorrect");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="R&M logo" className={styles.picture} />
      <h2>LOGIN</h2>

      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input
          placeholder="example@example.com"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={styles.myInput}
          autoComplete="username"
        />
        <p className={styles.error}>{errors.email}</p>
        <label>Password:</label>
        <input
          autoComplete="current-password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={styles.myInput}
        />
        {!errors.email && <p className={styles.error}>{errors.password}</p>}
        <button type="submit" value="LOGIN">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
