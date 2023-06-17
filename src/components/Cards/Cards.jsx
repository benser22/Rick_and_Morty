import React from "react";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Cards({ characters, onClose }) {
  
  return (
    <div className={styles.container}>
      {characters.map((element, index) => {
        return (
          <Card
            element={element}
            onClose={onClose}
            key={element.id}
            inFocus={index === element.id}
          />
        );
      })}
    </div>
  );
}
