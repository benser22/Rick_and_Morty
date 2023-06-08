import React, { useState } from "react";
import { pictures, gifs } from "../Pictures";
import foot from "./FootCard.module.css";
import styles from './Card.module.css';

export default function Card(props) {
  const [myroot, setMyroot] = useState(props.image);
  const [mygif] = useState(props.gifs);
  const [isHovered, setIsHovered] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const handleHover = () => {
    setIsHovered(true);
    setMyroot(props.gif);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setMyroot(props.image);
  };

  const onClose = () => {
    setVisibility(false);
  };

  const onOpen = () => {
    setVisibility(true);
  };

  const clickCard = () => {
    if (props.inFocus) {
      return;
    } else if (props.nextCard) {
      props.goToNextCard();
    } else {
      props.goToPreviousCard();
    }
  };

  return (
    <div
      className={`${styles.card} ${props.inFocus ? styles.visible : ""} ${
        props.prevCard ? `${styles.prev} ${styles.visible}` : ""
      } ${props.nextCard ? `${styles.next} ${styles.visible}` : ""} ${
        visibility ? "" : styles.invisible
      } ${isHovered ? styles.hovered : ""}`}
      onClick={clickCard}
    >
      <button
        className={`${styles.mybutton} ${styles.rig}`}
        onClick={visibility ? onClose : onOpen}
      >
        {props.id} X
      </button>
      <h2 className={styles.name}>
        <span className={styles.value}>{props.name}</span>
      </h2>
      <h2 className={styles.property}>
        Status: <span className={styles.value}>{props.status}</span>
      </h2>
      <h2 className={styles.property}>
        Species: <span className={styles.value}>{props.species}</span>
      </h2>
      <h2 className={styles.property}>
        Gender: <span className={styles.value}>{props.gender}</span>
      </h2>
      <h2 className={styles.property}>
        Origin: <span className={styles.value}>{props.origin.name}</span>
      </h2>
      <div className={foot.contFoot}>
        <span
          className={`${foot.prev} ${props.inFocus ? "" : foot.empty}`}
          onClick={props.goToPreviousCard}
        ></span>
        <img
          className={`${foot.characters} ${props.inFocus ? "" : foot.static}`}
          src={props.inFocus ? myroot : props.image}
          alt={"Imagen de " + props.name}
          width="220"
          height="213"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
        <span
          className={`${foot.next} ${props.inFocus ? "" : foot.empty}`}
          onClick={props.goToNextCard}
        ></span>
      </div>
    </div>
  );
}

export { pictures, gifs };
