import { useEffect, useState, useRef } from "react";
import axios from "axios";
import audioFile from "../../assets/sounds/letter.mp3";

export default function useAudioPlayer(id) {
  const [character, setCharacter] = useState(null);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedStatus, setDisplayedStatus] = useState("");
  const [displayedGender, setDisplayedGender] = useState("");
  const [displayedOrigin, setDisplayedOrigin] = useState("");
  const [displayedSpecies, setDisplayedSpecies] = useState("");
  const audioRef = useRef(null);
  const [isOver, setIsOver] = useState(false)

/*
utilizo useRef xq tenía problemas para detener el audio cuando se tenía que desmontar abruptamente el componente. Me sirve para almacenar una referencia mutable a la instancia del temporizador. Puedo acceder a la instancia del temporizador anterior y cancelarlo cuando sea necesario, evitando problemas como múltiples instancias del temporizador ejecutándose simultáneamente.
*/


  // Este hook maneja la petición del personaje del que quiero mostrar los detalles
  useEffect(() => {
    //Instancia de CancelToken para cancelar la solicitud si el componente se desmonte antes de que se complete la solicitud.
    const source = axios.CancelToken.source();

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        setCharacter(data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error:", error.message);
        }
      });

    return () => {
      source.cancel("Request canceled"); // Al desmontar uso el callback para cancelar la solicitud y limpiar los campos de character
      setCharacter(null);
      setDisplayedName("");
      setDisplayedStatus("");
      setDisplayedGender("");
      setDisplayedOrigin("");
      setDisplayedSpecies("");
    };
  }, [id]);

  // Este hook maneja la animación de mostrar letra por letra del personaje que recibimos antes
  useEffect(() => {
    if (character) {
      const nameText = character.name;
      const statusText = character.status;
      const genderText = character.gender;
      const originText = character.origin.name;
      const speciesText = character.species;
      const totalLetters = //Todas las caracteristicas concatenadas
        nameText.length +
        statusText.length +
        genderText.length +
        originText.length +
        speciesText.length;
      let letterCount = 0; //Contador de letras

      //Se inicia un temporizador (setInterval) para mostrar los fragmentos de texto uno por uno en la interfaz de usuario.
      const timer = setInterval(() => {
        if (letterCount < nameText.length) {
          setDisplayedName((prevName) => prevName + nameText[letterCount]);
        } else if (letterCount < nameText.length + statusText.length) {
          setDisplayedStatus(
            (prevStatus) =>
              prevStatus + statusText[letterCount - nameText.length]
          );
        } else if (
          letterCount <
          nameText.length + statusText.length + genderText.length
        ) {
          setDisplayedGender(
            (prevGender) =>
              prevGender +
              genderText[letterCount - nameText.length - statusText.length]
          );
        } else if (
          letterCount <
          nameText.length +
            statusText.length +
            genderText.length +
            originText.length
        ) {
          setDisplayedOrigin(
            (prevOrigin) =>
              prevOrigin +
              originText[
                letterCount -
                  nameText.length -
                  statusText.length -
                  genderText.length
              ]
          );
        } else if (
          letterCount <
          nameText.length +
            statusText.length +
            genderText.length +
            originText.length +
            speciesText.length
        ) {
          setDisplayedSpecies(
            (prevSpecies) =>
              prevSpecies +
              speciesText[
                letterCount -
                  nameText.length -
                  statusText.length -
                  genderText.length -
                  originText.length
              ]
          );
        }

        letterCount++;

        if (letterCount === totalLetters) {
          setIsOver(true);
          clearInterval(timer);
        }
      }, 70);
    }
  }, [character]); // No necesito limpiar al desmontar este hook, xq ya lo hago en el primer useEfect


  // Este hook se encarga de reproducir el audio sólo mientras dure la animación de mostrar letra x letra
  useEffect(() => {
    if (character) {
      const totalLetters =
        character.name.length +
        character.status.length +
        character.gender.length +
        character.origin.name.length +
        character.species.length;
      const audioDuration = totalLetters * 70; // Duración en milisegundos

      const audio = new Audio(audioFile);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, audioDuration);

      audioRef.current = audio;
    }

    return () => { // Limpio todo al desmontar
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [character]);

  const handleSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return {
    character,
    displayedName,
    displayedStatus,
    displayedGender,
    displayedOrigin,
    displayedSpecies,
    handleSound,
    isOver
  };
}
