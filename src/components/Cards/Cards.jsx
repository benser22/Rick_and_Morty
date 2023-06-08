import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "../Cards/Container.css";

export default function Cards(props) {
  const [currentCard, setCurrentCard] = useState(0);

  const goToPreviousCard = () => {
    setCurrentCard((prevCurrentCard) =>
      prevCurrentCard === 0 ? (props.characters.length - 1) : prevCurrentCard - 1
    );
  };
  
  const goToNextCard = () => {
    setCurrentCard((prevCurrentCard) =>
      prevCurrentCard === (props.characters.length - 1) ? 0 : prevCurrentCard + 1
    );
  };


  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? "down" : "up";

    if (direction === "down") {
      goToNextCard();
    } else {
      goToPreviousCard();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);


  return (
    <div>
      <div className="container">
        {props.characters.map((element, index) => (
          <Card
            {...element}
            key={element.id}
            inFocus={index === currentCard}
            prevCard={(index === currentCard - 1) || (currentCard === 0 && index === props.characters.length - 1)}
            nextCard={(index === currentCard + 1) || (currentCard === props.characters.length - 1 && index === 0)}
            // onClick={() => chooseCard(index)
          />
        ))}
      </div>
      <div className="arrows">
        {/* <span className="arrow prev left" onClick={goToPreviousCard}></span>
        <span className="arrow next right" onClick={goToNextCard}></span> */}
      </div>
    </div>
  );
}
