import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card/Card';
import '../Cards/Container.css';

export default function Cards(props) {
  const [currentCard, setCurrentCard] = useState(0);

  const goToPreviousCard = useCallback(() => {
    setCurrentCard((prevCurrentCard) => Math.max(prevCurrentCard - 1, 0));
  }, []);

  const goToNextCard = useCallback(() => {
    setCurrentCard((prevCurrentCard) =>
      Math.min(prevCurrentCard + 1, props.characters.length - 1)
    );
  }, [props.characters.length]);

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
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <div className="container">
        {props.characters.map((element, index) => (
          <Card {...element} key={element.id} inFocus={index === currentCard} />
        ))}
      </div>
      <div className="arrows">
        <span className="arrow prev left" onClick={goToPreviousCard}></span>
        <span className="arrow next right" onClick={goToNextCard}></span>
      </div>
    </div>
  );
}
