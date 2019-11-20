import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className="root">
        <button className="buttons"
          /* Gets access through the HOC in App.js */
          onClick={this.props.decreaseCount}>-</button>
        <span>{this.props.countValue}</span>
        <button className="buttons"
          /* Gets access through the HOC in App.js */
          onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
}

export default Counter;