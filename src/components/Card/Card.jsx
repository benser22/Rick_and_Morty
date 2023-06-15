import React, { useState } from "react";
import elements from "./Elements.module.css";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const [myroot, setMyroot] = useState(props.image);
  const [isHovered, setIsHovered] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
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
      className={`${styles.card} ${
        props.inFocus ? styles.visible + " " + styles.centeredCard : ""
      } ${props.prevCard ? `${styles.prev} ${styles.visible}` : ""} ${
        props.nextCard ? `${styles.next} ${styles.visible}` : ""
      } ${!visibility ? styles.invisible : ""} ${
        isHovered ? styles.hovered : ""
      }`}
      onClick={clickCard}
    >
      <button
        className={`${elements.mybutton} ${elements.rig}`}
        onClick={visibility ? onClose : onOpen}
      >
        {props.id} X
      </button>
      <h2 className={elements.name}>
        <span className={elements.value}>{props.name}</span>
      </h2>
      <h2 className={elements.property}>
        Status: <span className={elements.value}>{props.status}</span>
      </h2>
      <h2 className={elements.property}>
        Species: <span className={elements.value}>{props.species}</span>
      </h2>
      <h2 className={elements.property}>
        Gender: <span className={elements.value}>{props.gender}</span>
      </h2>
      <h2 className={elements.property}>
        Origin: <span className={elements.value}>{props.origin.name}</span>
      </h2>
      <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}>
        <h3 className={elements.details}>+ details...</h3>
      </Link>
      {/* <span
        className={`${elements.prev} ${props.inFocus ? "" : elements.empty}`}
        onClick={props.goToPreviousCard}
      ></span> */}
      <img
        className={`${elements.characters} ${
          props.inFocus ? "" : elements.static
        }`}
        src={myroot}
        alt={"Imagen de " + props.name}
        width="220"
        height="213"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
      {/* <span
        className={`${elements.next} ${props.inFocus ? "" : elements.empty}`}
        onClick={props.goToNextCard}
      >
        {" "}
      </span> */}
    </div>
  );
}
