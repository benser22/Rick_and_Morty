import React from "react";

const Form = ({ userData, handleChange, login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          autoComplete="new-mail"
          required
        />

        <label htmlFor="password">Contraseña:</label>
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
