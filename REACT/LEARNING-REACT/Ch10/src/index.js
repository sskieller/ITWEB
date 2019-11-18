import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Counter extends React.Component {
    render() {
        let textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}

class PlusButton extends React.Component {
    render() {
        let buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px",
        };
        return (
            // Serving function to button component
            <button onClick={this.props.clickHandler} style={buttonStyle}>+</button>
        )
    }
}

class CounterParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increase = this.increase.bind(this);
    }

    increase(e) {
        let currentCount = this.state.count;

        if (e.ctrlKey && e.shiftKey) {
            currentCount += 1000;
        } else if (e.ctrlKey) {
            currentCount += 100;
        } else if (e.shiftKey) {
            currentCount += 10;
        } else {
            currentCount += 1;
        }

        this.setState({
            count: currentCount
        });
    }

    render() {
        let backgroundStyle = {
            padding: 50,
            margin: 20,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                {/* Serving function to button component */}
                <PlusButton clickHandler={this.increase}/>
            </div>
        );
    }
}


// Custom events
class Something extends React.Component {
    handleMyEvent(e) {
        // Do something
    };
    componentDidMount() { // Add event listener on creation
        window.addEventListener("someEvent", this.handleMyEvent);
    };
    componentWillUnmount() { // Remove event listener on deletion
        window.addEventListener("someEvent", this.handleMyEvent);
    };

    render() {
        return (
            <div>Hello</div>
        ); 
    }
}




ReactDOM.render(<div>
<CounterParent/>
</div>, document.getElementById('root'));