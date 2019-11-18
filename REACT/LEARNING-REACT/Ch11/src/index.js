import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let destination = document.getElementById('root');

class Counter extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        console.log("render: Counter component");

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}
class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor: It's default time!");
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps: You probably don't need this!")
        return null;
    }
    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: Component just updated!");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate: Component is about to commit its changes!")
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount: Component is inserted into the tree!");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount: Component is about to be removed from the DOM!");
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?");
        if (newState.count < 5) {
            console.log("shouldComponentUpdate: Component should update!");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(destination);
            console.log("shouldComponentUpdate: Component should not update!");
            return false;
        }
    }
    render() {
        var backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        console.log("render: CounterParent component");
        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase}>
                    +
          </button>
            </div>
        );
    }
};
ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    destination
);