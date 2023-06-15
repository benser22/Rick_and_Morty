import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import audioFile from "../../assets/sounds/letter.mp3";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedStatus, setDisplayedStatus] = useState("");
  const [displayedGender, setDisplayedGender] = useState("");
  const [displayedOrigin, setDisplayedOrigin] = useState("");
  const [displayedSpecies, setDisplayedSpecies] = useState("");
  const [audio, setAudio] = useState(null);

   // eslint-disable-next-line
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        setCharacter(data);
      }
    );
  }, [id]);

   // eslint-disable-next-line
  useEffect(() => {
    if (character) {
      const nameText = character.name;
      const statusText = character.status;
      const genderText = character.gender;
      const originText = character.origin.name;
      const speciesText = character.species;
      const totalLetters =
        nameText.length +
        statusText.length +
        genderText.length +
        originText.length +
        speciesText.length;
      let letterCount = 0;

      const timer = setInterval(() => {
        if (letterCount < nameText.length) {
          setDisplayedName((prevName) => prevName + nameText[letterCount]);
        } else if (letterCount < nameText.length + statusText.length) {
          setDisplayedStatus((prevStatus) =>
            prevStatus + statusText[letterCount - nameText.length]
          );
        } else if (
          letterCount <
          nameText.length + statusText.length + genderText.length
        ) {
          setDisplayedGender((prevGender) =>
            prevGender + genderText[letterCount - nameText.length - statusText.length]
          );
        } else if (
          letterCount <
          nameText.length + statusText.length + genderText.length + originText.length
        ) {
          setDisplayedOrigin((prevOrigin) =>
            prevOrigin + originText[letterCount - nameText.length - statusText.length - genderText.length]
          );
        } else if (
          letterCount <
          nameText.length + statusText.length + genderText.length + originText.length + speciesText.length
        ) {
          setDisplayedSpecies((prevSpecies) =>
            prevSpecies + speciesText[letterCount - nameText.length - statusText.length - genderText.length - originText.length]
          );
        }

        letterCount++;

        if (letterCount === totalLetters) {
          clearInterval(timer);
        }
      }, 100);
    }
  }, [character]);

  // eslint-disable-next-line
  useEffect(() => {
    if (character) {
      const totalLetters =
        character.name.length +
        character.status.length +
        character.gender.length +
        character.origin.name.length +
        character.species.length;
      const audioDuration = totalLetters * 100; // Duración en milisegundos

      const audio = new Audio(audioFile);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, audioDuration);

      setAudio(audio);
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character]);

  if (!character) {
    return <p>Loading...</p>;
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
        <span>Species:</span> {displayedSpecies}
      </p>
            <NavLink to="/home" className={styles.navLink}>
        <FaHome />
      </NavLink>
    </div>
  );
}
