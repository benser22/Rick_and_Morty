import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ramtitle from "../../assets/images/title.webp";
import styles from "./Nav.module.css";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../localStorageUtils";
import Modal from "react-modal";

function Nav(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [logout, setLogout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Utilizar useNavigate

  useEffect(() => {
    const storedEmail = getDataFromLocalStorage("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setEmail(props.userData.email);
      saveDataToLocalStorage("email", props.userData.email);
    }
  }, [props.userData.email]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    setLogout(true);
    setShowModal(false);
  };

  useEffect(() => {
    if (logout) {
      navigate("/"); // Utilizar navigate en lugar de props.history.push
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
        to={logout ? "/" : "/home"}
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
        <hr  style={{color:"white", width:"100%", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}></hr>
        <p style={{fontWeight:"bold", fontFamily:"sans-serif"}}>Are you sure you want to log out?</p>
        <button onClick={handleConfirmLogout}>Logout</button>
        <button onClick={() => setShowModal(false)}>Cancel</button>
      </Modal>
    </div>
  );
}

export default Nav;
