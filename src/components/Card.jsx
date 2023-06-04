import React from 'react';
import '../Cards.css';
import pic1 from '../images/rickand-morty-rick.png';
import pic2 from '../images/morty.png';
const pictures = { 1: pic1, 2: pic2 };

export default function Card(props) {
  const onClose = () => {
    window.alert('Emulamos que se cierra la card');
    console.log(pictures)
  };

  return (
    <div className={`card ${props.isVisible ? 'visible' : ''}`}>
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
      <img
        className={props.cla}
        src={props.image}
        alt={'Imagen de ' + props.name}
      />
    </div>
  );
}
