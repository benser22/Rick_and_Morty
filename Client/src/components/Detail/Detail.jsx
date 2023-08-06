import React from "react";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./Detail.module.css";
import Loader from "../Loader/Loader"

import useAudioPlayer from "./useAudioPlayer";
// Utilice un archivo separado para la animación, porque el código se me hizo largo. Yo quiero mostrar letra por letra las caracterísitcas del pj, simulando una máquina de escribir

// También decidí hacer por separado un componente para mostrar más info del personaje, en este caso las apariciones en la serie, en una caja scrollable
import Episodes from "./Episodes";

export default function Detail() {
  const { id } = useParams();
  const {
    character,
    displayedName,
    displayedStatus,
    displayedGender,
    displayedOrigin,
    displayedSpecies,
    handleSound,
    isOver,
  } = useAudioPlayer(id);

  // Si no se ha cargado la información del personaje, muestro un componente Loader, con esto evito errores si aún no se ha montado el componente
  if (!character) {
    return <Loader />;
  }
  return (
    <div data-testid="detail-component">
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2 className={styles.name}>
          {id} - {displayedName}
        </h2>
        <img
          src={character.image}
          width="220"
          height="213"
          className={styles.img}
          alt="Character"
        />
        <p className={styles.mini}>
          <span>Status:</span> {displayedStatus}
        </p>
        <p className={styles.mini}>
          <span>Gender:</span> {displayedGender}
        </p>
        <p className={styles.mini}>
          <span>Origin:</span> {displayedOrigin}
        </p>
        <p className={styles.mini}>
          <span>Specie:</span> {displayedSpecies}
        </p>
        {/* Icono de inicio */}
        <NavLink to="/home" className={styles.navLink}>
          <FaHome onClick={handleSound} />
        </NavLink>
      </div>
      <div className={styles.episodesContainer}>
        {isOver && <Episodes episodes={character.episode}></Episodes>}
      </div>
    </div>
    </div>
  );
}
