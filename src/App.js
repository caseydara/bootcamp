import React, {useState} from 'react';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

const App = (props) => {
  const [cards, setCards] = useState([
      { front: 'door', back: 'something you can open'},
      { front: 'dali cto', back: 'pape'},
  ])

  const addCard = (card) => {
    const newCards = cards.slice().concat(card)
    setCards(newCards)
  }

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  }

  return(
    <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard}/>
  );

    
}

// class App extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       cards: [
//         { front: 'front1', back: 'back1'},
//         { front: 'front2', back: 'back2'},
//       ],

//       editor: true,
//     };

//   }

//   addCard = card => {
//     const cards = this.state.cards.slice().concat(card);
//     this.setState({cards});

//   }

//   deleteCard = index => {
//     const cards = this.state.cards.slice();
//     cards.splice(index, 1);
//     this.setState({cards});  
//   }

//   switchMode = () => this.setState({editor: !this.state.editor});
//   render(){
//     if(this.state.editor) {
//       return <CardEditor addCard={this.addCard} cards = {this.state.cards} deleteCard={this.deleteCard} switchMode={this.switchMode}/>;
//     }
//     else{
//       return <CardViewer switchMode={this.switchMode}/>
//     }
    
    
//   }
// }

export default App;
