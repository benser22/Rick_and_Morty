import React, { useState } from "react";
import "../Card/Card.css";
import "../Card/Profiles.css";
import "../Modal/Modal.css";
import { pictures, gifs } from "../Pictures";

export default function Card(props) {
  const [myroot, setMyroot] = useState(props.image);
  const [isHovered, setIsHovered] = useState(false);
  const [visibility, setVisibility] = useState(true);


  console.log("previa: ", props.name, "  actual: ", "next ");

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


  return (
    <div className={`card ${props.inFocus ? "visible" : ""} ${props.prevCard ? "post visible" : ""} ${props.nextCard ? "prev visible" : ""} ${visibility ? "" : "invisible"} ${isHovered ? "hovered" : ""}`}>
      <button className="mybutton rig" onClick={visibility ? onClose : onOpen}> {props.id} X </button>
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
        className="characters" src={myroot} alt={"Imagen de " + props.name} width="220" height="213" onMouseEnter={handleHover} onMouseLeave={handleLeave} />
    </div>
  );
}

export { pictures, gifs };
