import React, { useState } from "react";
import "../Card/Card.css";
import "../Card/Profiles.css";
import { pictures, gifs, closedcard } from "../Pictures";
import Modal from "../Modal/Modal";

export default function Card(props) {
  const [myroot, setMyroot] = useState(props.image);
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
    if (props.inFocus) {
      setVisibility(false);
    }
  };

  const onOpen = () => {
    if (props.inFocus) {
      setVisibility(true);
    }
  };

  if (!visibility && props.inFocus) {
    return (
      <div className={`${props.inFocus ? "invisible" : ""}`}>
        <Modal title={props.name} txtbutton="Habilitar Carta" openCard={onOpen} msg="Carta cerrada virtualmente" animation={true}/>
        <img src={closedcard} className="closed-card" alt={props.name}></img>
      </div>
    );
  }

  return (
    <div className={`card ${props.inFocus ? "visible" : ""} ${isHovered ? "hovered" : ""}`}>
      <button className="mybutton rig" onClick={onClose}> X </button>
      <h2 className="name">
        <span className="value">{props.name}</span>
      </h2>
      <h2 className="property">
        Status: <span className="value">{props.status}</span>
      </h2>
      <h2 className="property">
        Species: <span className="value">{props.species}</span>
      </h2>
      <h2 className="property">
        Gender: <span className="value">{props.gender}</span>
      </h2>
      <h2 className="property">
        Origin: <span className="value">{props.origin.name}</span>
      </h2>
      <img
        className="characters"
        src={myroot}
        alt={"Imagen de " + props.name}
        width="220"
        height="213"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
    </div>
  );
}

export { pictures, gifs };
