import React, { useState } from "react";
import "../styles/Cards.css";
import "../styles/Profiles.css";
import { pictures, gifs } from "./Pictures";

export default function Card(props) {
  const [myroot, setMyroot] = useState(props.image);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    setMyroot(props.gif);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setMyroot(props.image);
  };

  const onClose = () => {
    window.alert("Emulamos cierre de carta");
  };

  return (
    <div
      className={`card ${props.isVisible ? "visible" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <button className="close-button" onClick={onClose}>
        X
      </button>
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
      <img className={props.cla} src={myroot} alt={"Imagen de " + props.name} />
    </div>
  );
}

export { pictures, gifs };
