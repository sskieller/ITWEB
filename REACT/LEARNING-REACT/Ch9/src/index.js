import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Cirle extends React.Component {
    render() {
        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        };

        return (
            <div style={circleStyle}>

            </div>
        )
    }
}

function showAllCircles() {
    let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
"#85FFC7", "#297373", "#FF8552", "#A40E4C"];
let renderData = [];

for (var i = 0; i < colors.length; i++) {
    renderData.push(<Cirle 
    key={i + colors[i]} // Setting internal identifier for React
    bgColor={colors[i]}/>);
}

return renderData;
}



function showCircle() {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);

    return <Cirle bgColor={colors[ran]}/>;
}

ReactDOM.render(
    <div>
        {showCircle()}
        {showAllCircles()}
    </div>,
    document.getElementById('root')
);