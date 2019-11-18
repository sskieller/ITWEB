import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Colorizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "",
			bgColor: "white",
		};

		this.colorValue = this.colorValue.bind(this);
		this.setNewColor = this.setNewColor.bind(this);
	}

	colorValue(e) {
		this.setState({
			color: e.target.value
		});
	}

	setNewColor(e) {
		this.setState({
			bgColor: this.state.color
		});

		this._input.focus(); // Setting focus on referenced DOM element
		this._input.value = ""; // Clearing input form

		e.preventDefault();
	}

	render() {
		var squareStyle = {
			backgroundColor: this.state.bgColor
		};

		return (
			<div className="colorArea">
				<div style={squareStyle} className="colorSquare"></div>

				<form onSubmit={this.setNewColor}>
					<input onChange={this.colorValue} 
						ref={ // Accessing element's DOM representation
						(el) => this._input = el // Access element using self._input
						} 
						placeholder="Enter a color value" />
					<button type="submit">Go</button>
				</form>
				{/* Instantiating new component, set value to state.bgColor */}
				<ColorLabel color={this.state.bgColor}/>  
			</div>
		);
	}
}

// Accessing element in root html document in public folder
var heading = document.getElementById('color-heading'); 

class ColorLabel extends React.Component {
	render() {
		return ReactDOM.createPortal( // ref h1 element using heading var
			": " + this.props.color,
			heading // Referencing h1 element
		);
	}
}

ReactDOM.render(<div>
	<h1 id="colorHeading">Colorizer</h1>
	<Colorizer />
</div>, document.getElementById('root'));

