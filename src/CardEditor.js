import './CardEditor.css';
import React, {useState} from 'react';

const CardEditor = (props) => {

    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    console.log(props.cards)

    const cardList = props.cards.map((card, index) => {
        return(
            <tr>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td><button onClick={() => props.deleteCard(index)}>delete card</button></td>
            </tr>
        )
    })

    const addAndClear = (card) => {
        props.addCard(card);
        setFront('');
        setBack('');
    }

    return (
        <div>
            <h2>Card Editor</h2>
            <table>
                <thead>
                    <th>Front</th>
                    <th>Back</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {cardList}
                </tbody>
            </table>
            
            <br/>
            <input name="front" placeholder='Front of card' value={front} onChange={(e) => setFront(e.target.value)}/>
            <input name ="back" placeholder='Back of card' value={back} onChange={e => setBack(e.target.value)}/>
            <button onClick = {() => addAndClear({front, back})}>add card</button>


        </div>
    );

}

// class CardEditor extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {front: '', back: ''}
//     }

//     handleChange = event => {
//         console.log(event.target.name);
//         this.setState({[event.target.name]: event.target.value });
//     }
//     addCard = () => {
//         console.log('clicked');
//         this.props.addCard(this.state);
//         this.setState({front:'', back:''})

//     }

//     deleteCard = index => {
//         console.log('clicked',index);
//         this.props.deleteCard(index);
//     }


//     render() {
//         const cards = this.props.cards.map((card, index) => {
//             return(
//                 <tr key={index}>
//                     <td>{card.front}</td>
//                     <td>{card.back}</td>
//                     <td>
//                         <button onClick={ () => this.deleteCard(index)}>Delete card</button>
//                     </td>
//                 </tr>
//             );
            
//         });

//         return (
//             <div>
//                 <h2>Card Editor</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Front</th>
//                             <th>Back</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>{cards}</tbody>
//                 </table>
//                 <input 
//                 name="front"
//                 onChange={this.handleChange} placeholder='Front of card' value={this.state.front}/>
//                 <input
//                 name ="back"
//                 onChange={this.handleChange} placeholder='Back of card' value={this.state.back}/>
//                 <button onClick={this.addCard}>Add</button>
//             </div>
//         );
//     }
    
// }

export default CardEditor;