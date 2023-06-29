// React
import React, { useState, useEffect } from "react";

// React Router
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// Componente
import SearchBar from "../SearchBar/SearchBar";

// Imágen que me servirá para anclar "/home"
import ramtitle from "../../assets/images/title.webp";

// Estilos
import styles from "./Nav.module.css";

// Funciones auxiliares de almacenamiento local
import {
  saveDataToLocalStorage, // Guardar datos en almacenamiento local
  getDataFromLocalStorage, // Obtener datos desde almacenamiento local
} from "../../localStorageUtils";

// Librería de Modal
import Modal from "react-modal";
Modal.setAppElement("#root"); /* Especifica el elemento de la aplicación (App element) al utilizar la biblioteca react-modal. Esta línea es necesaria para garantizar el correcto funcionamiento de react-modal en términos de accesibilidad. */

function Nav(props) {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el mouse está sobre el componente.Lo necesito para mostrar o el mail del usuario o Logout
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico del usuario
  const [logout, setLogout] = useState(false); // Estado para controlar si se ha realizado el cierre de sesión
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate(); 
  const location = useLocation(); // Ubicación actual de la ruta

  useEffect(() => {
    // Obtengo el correo electrónico almacenado para mostrarlo en mi nav
    const storedEmail = getDataFromLocalStorage("email");
    if (storedEmail) {
      // Si hay un correo electrónico almacenado en el almacenamiento local, lo utiliza
      setEmail(storedEmail); // Actualizo el estado de 'email' con el correo electrónico almacenado
    } else {
      // De lo contrario, utiliza el correo electrónico proporcionado en las propiedades
      setEmail(props.userData.email); // Actualizo el estado de 'email' con el correo electrónico de las propiedades
      saveDataToLocalStorage("email", props.userData.email); // Guarda el correo electrónico en el almacenamiento local
    }
  }, [props.userData.email]);

  const handleMouseEnter = () => {
    setIsHovered(true); // Actualizo el estado de 'isHovered' para indicar que el mouse está sobre el componente
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Actualizo el estado de 'isHovered' para indicar que el mouse ya no está sobre el componente
  };

  const handleLogout = () => {
    setShowModal(true); // Muestro el modal de confirmación de cierre de sesión
  };

  const handleConfirmLogout = () => {
    setLogout(true); // Actualizo el estado de 'logout' para indicar que se ha realizado el cierre de sesión
    setShowModal(false); // Oculto el modal de confirmación de cierre de sesión
  };

  useEffect(() => {
    if (logout) {
      navigate("/"); // Redirijo al usuario a la página de inicio cuando se realiza el cierre de sesión
    }
  }, [logout, navigate]);

  return (
    <div
      className={styles.search_style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to="/home">
        <img
          className={styles.imageBar}
          src={ramtitle}
          alt="Title Rick and Morty"
        />
      </NavLink>
      <NavLink to={"/favorites"} style={{ textDecoration: "none" }}>
        <label className={`${styles.about} ${styles.favorite}`}>
          Favorites
        </label>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <label className={styles.about}>About</label>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
      <NavLink
        to={logout ? "/" : location}
        style={{ textDecoration: "none" }}
        onClick={handleLogout}
      >
        {isHovered ? (
          <p className={styles.logout}>LOGOUT</p>
        ) : (
          <p className={styles.mail}>{email}</p>
        )}
      </NavLink>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Confirm Logout"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2 className={styles.myh2}>Confirm Logout</h2>
        <hr style={{ width: "100%", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}></hr>
        <p style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize:"14px" }}>Are you sure you want to log out?</p>
        <button style={{ fontSize:"14px" }} onClick={handleConfirmLogout}>Logout</button>
        <button style={{ fontSize:"14px" }} onClick={() => setShowModal(false)}>Cancel</button>
      </Modal>
    </div>
  );
}

export default Nav;
