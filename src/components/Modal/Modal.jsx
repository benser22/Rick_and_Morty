import React, { useEffect, useState } from "react";
import "../Modal/Modal.css";

const Modal = ({ myroot, title, txtbutton, msg, openCard, animation }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (animation) {
      setShowModal(true);
    }
  }, [animation]);

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <img className="erased" src={myroot} alt={"Imagen de " + {title}} width="99" height="97"/>
      <h2>{title}</h2>
      <h4>{msg}</h4>
      <button className="mybutton" onClick={openCard}>{txtbutton}</button>
    </div>
  );
};

export default Modal;
