import React, { useState } from 'react';
import Card from './Card';
import '../Container.css';

export default function Cards(props) {
  const [currentCard, setCurrentCard] = useState(0);

  const goToPreviousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const goToNextCard = () => {
    if (currentCard < props.characters.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <div>
      <div className="container">
        {props.characters.map((element, index) => (
          <Card {...element} key={element.id} isVisible={index === currentCard} />
        ))}
      </div>
      <div className="arrows">
        <span className="arrow prev left" onClick={goToPreviousCard}>
        </span>
        <span className="arrow next right" onClick={goToNextCard}>
        </span>
      </div>
    </div>
  );
}
