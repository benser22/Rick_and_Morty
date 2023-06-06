import React from "react";

const Modal = ({ title, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <button onClick={onClose}>Habilitar carta</button>
      </div>
    </div>
  );
};

export default Modal;
