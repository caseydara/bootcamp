import './CardEditor.css';
import React, { useState } from 'react';
import Card from './Card';

function CardEditor(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const cardList = props.cards.map((card, index) => {
    return (
      <Card card={card} index={index} addCard={props.addCard} deleteCard={props.deleteCard} switchMode={props.switchMode} setFront={setFront} />
    );
  });

  const addAndClear = (card) => {
    if (card.front === '' && card.back === '') {
      return;
    }
    props.addCard(card);
    setFront('');
    setBack('');
  };

  return (
    <div>
      <h2>Card Editor</h2>
      <table>
        <thead>
          <th>Front</th>
          <th>Back</th>
          <th>Delete</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {cardList}
        </tbody>
      </table>

      <br />
      <input name="front" placeholder="Front of card" value={front} onChange={(e) => setFront(e.target.value)} />
      <input name="back" placeholder="Back of card" value={back} onChange={(e) => setBack(e.target.value)} />
      <button type="button" onClick={() => addAndClear({ front, back })}>add card</button>
      {/* <button type="button" onClick={() => props.switchMode()}>switch mode</button> */}

    </div>
  );
}

export default CardEditor;
