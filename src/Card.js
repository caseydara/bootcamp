import React, { useState } from 'react';

function Card(props) {
  const { card } = props;
  const { index } = props;
  const [front, setFront] = useState(card.front);
  const [back, setBack] = useState(card.back);
  const [editMode, setEditMode] = useState(false);

  const editCard = () => {
    setEditMode(!editMode);
    card.front = front;
    card.back = back;
  };
  const finishEditing = (e) => {
    setEditMode(!editMode);
    card.front = front;
    card.back = back;
  };

  if (editMode) {
    return (
      <tr>
        <td>
          <input name="front" value={front} onChange={(e) => setFront(e.target.value)} />
        </td>
        <td>
          <input name="back" value={back} onChange={(e) => setBack(e.target.value)} />
        </td>
        <td>
          <button type="button" onClick={() => props.deleteCard(index)}>delete card</button>
        </td>
        <td>
          <button type="button" onClick={() => finishEditing()}>save card</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td>
          <button type="button" onClick={() => props.deleteCard(index)}>delete card</button>
        </td>
        <td>
          <button type="button" onClick={() => editCard()}>edit card</button>
        </td>
      </tr>
    );
  }
}

export default Card;
