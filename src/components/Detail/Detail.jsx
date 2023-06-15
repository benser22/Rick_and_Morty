import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedStatus, setDisplayedStatus] = useState("");
  const [displayedGender, setDisplayedGender] = useState("");
  const [displayedOrigin, setDisplayedOrigin] = useState("");
  const [displayedSpecies, setDisplayedSpecies] = useState("");

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        setCharacter(data);
      }
    );
  }, [id]);

  useEffect(() => {
    if (character) {
      const nameText = character.name;
      const statusText = character.status;
      const genderText = character.gender;
      const originText = character.origin.name;
      const speciesText = character.species;
      let nameIndex = 0;
      let statusIndex = 0;
      let genderIndex = 0;
      let originIndex = 0;
      let speciesIndex = 0;

      let nameTimer, statusTimer, genderTimer, originTimer, speciesTimer;

      nameTimer = setInterval(() => {
        setDisplayedName((prevName) => prevName + nameText[nameIndex]);
        nameIndex++;

        if (nameIndex === nameText.length) {
          clearInterval(nameTimer);

          statusTimer = setInterval(() => {
            setDisplayedStatus(
              (prevStatus) => prevStatus + statusText[statusIndex]
            );
            statusIndex++;

            if (statusIndex === statusText.length) {
              clearInterval(statusTimer);

              genderTimer = setInterval(() => {
                setDisplayedGender(
                  (prevGender) => prevGender + genderText[genderIndex]
                );
                genderIndex++;

                if (genderIndex === genderText.length) {
                  clearInterval(genderTimer);

                  speciesTimer = setInterval(() => {
                    setDisplayedSpecies(
                      (prevSpecies) => prevSpecies + speciesText[speciesIndex]
                    );
                    speciesIndex++;

                    if (speciesIndex === speciesText.length) {
                      clearInterval(speciesTimer);

                      originTimer = setInterval(() => {
                        setDisplayedOrigin(
                          (prevOrigin) => prevOrigin + originText[originIndex]
                        );
                        originIndex++;

                        if (originIndex === originText.length) {
                          clearInterval(originTimer);
                        }
                      }, 100);
                    }
                  }, 100);
                }
              }, 100);
            }
          }, 100);
        }
      }, 100);

      return () => {
        clearInterval(nameTimer);
        clearInterval(statusTimer);
        clearInterval(genderTimer);
        clearInterval(speciesTimer);
        clearInterval(originTimer);
      };
    }
  }, [character]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>({id}) -  {displayedName}</h2>
      <img
        src={character.image}
        width="220"
        height="213"
        className={styles.img}
        alt="Character"
      />
      <p>Status: {displayedStatus}</p>
      <p>Gender: {displayedGender}</p>
      <p>Species: {displayedSpecies}</p>
      <p>Origin: {displayedOrigin}</p>
    </div>
  );
}
