import React, { useState } from 'react';
import {
  BrowserRouter, Link, Routes, Route,
} from 'react-router-dom';

// import {
//   Routes, BrowserRouter as Router, Link, BrowserRouter,
// } from 'react-router-dom';

// import {
//   Routes, BrowserRouter as Router, Link, BrowserRouter,
// } from 'react-router-dom';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  const newDiv = document.createElement('div');

  // and give it some content
  const newContent = document.createTextNode('Hi there and greetings!');

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} />} />
        <Route path="/editor" element={<CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} />} />
        <Route path="/viewer" element={<CardViewer cards={cards} switchMode={switchMode} />} />
      </Routes>
      <li>
        <Link to="/editor">editor</Link>
      </li>
      <li>
        <Link to="/viewer">viewer</Link>
      </li>
    </BrowserRouter>
  );
}
export default App;
