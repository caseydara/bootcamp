import React, { useState } from 'react';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  // const editor = true;
  const [editor, setEditor] = useState(true);
  const [cards, setCards] = useState([
    { front: 'door', back: 'something you can open' },
    { front: 'dali cto', back: 'pape' },
  ]);

  const addCard = (card) => {
    const newCards = cards.slice().concat(card);
    setCards(newCards);
  };

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const switchMode = () => {
    setEditor(!editor);
  };

  if (editor) {
    return (<CardViewer cards={cards} switchMode={switchMode} />);
  } else {
    return (<CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} />);
  }
}
export default App;
