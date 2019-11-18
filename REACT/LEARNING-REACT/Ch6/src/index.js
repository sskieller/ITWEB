import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Spread operator

class Display extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        )
    }
}

class Label extends React.Component {
    render() {
        return (
            <Display {...this.props}/>
        );
    }
}

class Shirt extends React.Component {
    render() {
        return (
            <div>
                <Label {...this.props}/>
            </div>
        );
    }
}



// =========================
ReactDOM.render(
    <div>   
        <Shirt color={"#FEEE"} num={12} size={45}/>
    </div>,
    document.getElementById('root')
);