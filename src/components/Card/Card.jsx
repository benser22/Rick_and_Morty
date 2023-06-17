import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ element, onClose }) {
  return (
    <div className={styles.myDiv}>
      <button className={styles.myButton} onClick={() => onClose(element.id)}>
        X
      </button>
      <Link
        to={`/detail/${element.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h3 className={styles.title}>
          {element.id} - {element.name}
        </h3>
      </Link>
      <img className={styles.picture} src={element.image} alt="character R&M" />
    </div>
  );
}
