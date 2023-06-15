import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ userData, handleChange, login, setFormSubmitted }) => {
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/\d/.test(userData.password)) {
      setPasswordError("La contraseña debe contener al menos un número.");
      return;
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
      setPasswordError("La contraseña debe tener una longitud entre 6 y 10 caracteres.");
      return;
    }

    setPasswordError("");
    login(userData);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
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
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
