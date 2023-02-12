// import React from 'react';
import React from 'react';

function CardViewer(props) {
  let front = true;
  let currIndex = 0;

  const switchCard = () => {
    if (front) {
      document.getElementById('card').innerHTML = props.cards.slice()[currIndex].front;
    } else {
      document.getElementById('card').innerHTML = props.cards.slice()[currIndex].back;
    }
  };
  const switchSide = () => {
    front = !front;
    switchCard();
  };
  const newCard = (index) => {
    // if (index < 0 || index > props.cards.slice().length - 1) {
    //   return;
    // }
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');
    if (index === 0) {
      next.disabled = false;
      previous.disabled = true;// false
    } else if (index === props.cards.slice().length - 1) {
      next.disabled = true;
      previous.disabled = false;
    } else {
      next.disabled = false;
      previous.disabled = false;
    }
    currIndex = index;
    front = true;
    switchCard();
    document.getElementById('progress').innerHTML = `Card ${currIndex + 1}/${props.cards.slice().length}`;
  };

  return (
    <div>
      <h2>Card Viewer</h2>
      <h3 id="progress">Card 1/{props.cards.slice().length}</h3>
      <div id="card" onClick={() => switchSide()}>{props.cards.slice()[currIndex].front}</div>
      <button id="previous" type="button" onClick={() => newCard(currIndex - 1)}>Previous</button>
      <button id="next" type="button" onClick={() => newCard(currIndex + 1)}>Next</button>
      <button type="button" onClick={() => props.switchMode()}>switch mode</button>
    </div>
  );
}

// class CardViewer extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h2>Card Viewer</h2>
//             </div>
//         );
//     }
// }

export default CardViewer;
