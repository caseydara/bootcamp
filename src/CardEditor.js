import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {front: '', back: ''}
    }

    handleFrontChange = event => {
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value });
    }
    handleBackChange = event => {
        console.log(event.target.value);
        this.setState({ back: event.target.value });
    }
    render() {
        const cards = this.props.cards.map((card, index) => {
            return(
                <tr key={index}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td>
                        <button>Delete card</button>
                    </td>
                </tr>
            );
            
        });

        return (
            <div>
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <input 
                name="front"
                onChange={this.handleFrontChange} placeholder='Front of card' value={this.state.front}/>
                <input
                name ="back"
                onChange={this.handleBackChange} placeholder='Back of card' value={this.state.back}/>
                <button>Add</button>
            </div>
        );
    }
    
}

export default CardEditor;