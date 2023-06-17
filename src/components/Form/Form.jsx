import React, { useState } from "react";
import styles from "./Form.module.css";
import logo from "../../assets/images/logo_gira.gif";

const Form = ({ userData, handleChange, login, setFormSubmitted }) => {
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.com)$/.test(userData.email)) {
      alert("Has ingresado una dirección de correo electrónico inválida.");
      return;
    } // SOLO PERMITE LOS MAILS .COM
    
    // if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
    //   alert("Has ingresado una dirección de correo electrónico inválida.");
    //   return;
    // } SI QUISIERA INCLUIR A LOS MAILS TERMINADOS EN .CO .ORG ... ETC

    if (!/\d/.test(userData.password)) {
      setPasswordError("La contraseña debe contener al menos un número.");
      return;
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
      setPasswordError(
        "La contraseña debe tener una longitud entre 6 y 10 caracteres."
      );
      return;
    }

    setPasswordError("");
    login(userData);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="R&M logo" className={styles.picture} />
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          placeholder="example@example.com"
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          autoComplete="new-mail"
          required
          className={styles.myInput}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={userData.password}
          onChange={handleChange}
          autoComplete="new-password"
          className={styles.myInput}
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
