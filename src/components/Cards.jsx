import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import '../styles/Container.css';
// import summer from "../images/summer.png"
// import beth from "../images/beth.png"
// import jerry from "../images/jerry.png"

// console.log(summer, beth, jerry);

export default function Cards(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [canChangeCard, setCanChangeCard] = useState(true);

  const goToPreviousCard = useCallback(() => {
    if (currentCard > 0 && canChangeCard) {
      setCurrentCard(currentCard - 1);
      setCanChangeCard(false);
    }
  }, [currentCard, canChangeCard]);

  const goToNextCard = useCallback(() => {
    if (currentCard < props.characters.length - 1 && canChangeCard) {
      setCurrentCard(currentCard + 1);
      setCanChangeCard(false);
    }
  }, [currentCard, canChangeCard, props.characters.length]);

  const handleScroll = useCallback(
    (event) => {
      const direction = event.deltaY > 0 ? 'down' : 'up';

      if (direction === 'down') {
        goToNextCard();
      } else {
        goToPreviousCard();
      }
    },
    [goToNextCard, goToPreviousCard]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanChangeCard(true);
    }, 100); // Tiempo mínimo entre cambios de tarjeta en milisegundos

    return () => {
      clearTimeout(timeout);
    };
  }, [canChangeCard]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <div className="container">
        {props.characters.map((element, index) => (
          <Card {...element} key={element.id} isVisible={index === currentCard} />
        ))}
      </div>
      <div className="arrows">
        <span className="arrow prev left" onClick={goToPreviousCard}></span>
        <span className="arrow next right" onClick={goToNextCard}></span>
      </div>
    </div>
  );
}
