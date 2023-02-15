import React, { useState } from 'react';

function CardViewer(props) {
  const [front, setFront] = useState(true);
  const [currIndex, setCurrIndex] = useState(0);

  const switchSide = () => {
    setFront(!front);
  };
  const newCard = (index) => {
    setCurrIndex(index);
    setFront(true);
  };

  return (
    <div>
      <h2>Card Viewer</h2>
      <h3 id="progress">Card {currIndex + 1}/{props.cards.slice().length}</h3>
      <div id="card" onClick={() => switchSide()}>{front ? props.cards.slice()[currIndex].front : props.cards.slice()[currIndex].back}</div>
      <button id="previous" disabled={currIndex === 0} type="button" onClick={() => newCard(currIndex - 1)}>Previous</button>
      <button id="next" disabled={currIndex === props.cards.slice().length - 1} type="button" onClick={() => newCard(currIndex + 1)}>Next</button>
      <button type="button" onClick={() => props.switchMode()}>switch mode</button>
    </div>
  );
}

export default CardViewer;
