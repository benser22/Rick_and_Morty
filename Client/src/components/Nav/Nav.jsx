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

// Librería de Modal
import Modal from "react-modal";

function Nav(props) {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el mouse está sobre el componente.Lo necesito para mostrar o el mail del usuario o Logout
  const location = useLocation();
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico del usuario
  const [logout, setLogout] = useState(false); // Estado para controlar si se ha realizado el cierre de sesión
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(location.state.email);
    // eslint-disable-next-line
  }, [email]);

  const handleMouseEnter = () => {
    setIsHovered(true); // Actualizo el estado de 'isHovered' para indicar que el mouse está sobre el componente
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Actualizo el estado de 'isHovered' para indicar que el mouse ya no está sobre el componente
  };

  const handleLogout = () => {
    setIsHovered(false);
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
        appElement={document.getElementById("root")}
      >
        <h2 className={styles.myh2}>Confirm Logout</h2>
        <hr
          style={{
            width: "100%",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        ></hr>
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "14px",
          }}
        >
          Are you sure you want to log out?
        </p>
        <button style={{ fontSize: "14px" }} onClick={handleConfirmLogout}>
          Logout
        </button>
        <button
          style={{ fontSize: "14px" }}
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
}

export default Nav;
