import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Inline styling
class Letter extends React.Component {
    render() {
        var letterStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor ? this.props.bgcolor : "#FFDE00",
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
          };

        return (
            <div style={letterStyle}> 
                {this.props.children}
            </div>
        )
    }
}





// ============================
let destination = document.getElementById('root');
ReactDOM.render(
    <div>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
    </div>,
    destination
)