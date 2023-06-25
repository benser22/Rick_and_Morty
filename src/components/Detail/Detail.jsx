import React from "react";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAudioPlayer from "./useAudioPlayer";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const { character,
    displayedName,
    displayedStatus,
    displayedGender,
    displayedOrigin,
    displayedSpecies,
    handleSound
  } = useAudioPlayer(id);

  if (!character) {
    return <p style={{color: "white"}}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
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
      <NavLink to="/home" className={styles.navLink}>
        <FaHome onClick={handleSound} />
      </NavLink>
    </div>
  );
}
