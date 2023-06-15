import React from "react";
import styles from "./Form.module.css";

const Form = ({ userData, handleChange, login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
