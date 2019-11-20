import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import counter from './reducer';

import './index.css';


class Index extends React.Component {
  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

// Action creator
function addColor(value) {
  return {
    // Type property: Required
    type: "ADD",
    // Color property: Optional
    color: value
  };
}

// Action creator
function removeColor(value) {
  return {
    type: "REMOVE",
    color: value
  };
}



/**
 * REDUCER: https://redux.js.org/docs/basics/Reducers.html
 * NEVER DO INSIDE:
 * 1: Mutate its arguments
 * 2: Perform side effects like API calls and routing transitions
 * 3: Call non-pure functions, e.g. Date.now() or Math.random()
 * @param {} state 
 * @param {} action 
 */
function favoriteColors(state, action) {
  // if no state, init empty array
  if (state === undefined) {
    state = [];
  }

  // if action type ADD, add color to state array
  if (action.type === "ADD") {
    return state.concat(action.color);
    // if action type REMOVE, return new array with color omitted
  } else if (action.type === "REMOVE") {
    return state.filter(function(item) {
      return item !== action.color;
    });
    // if action type unknown, return state unedited
  } else {
    return state;
  }
}


/**
 * createStore: https://redux.js.org/api/createstore
 */
let store = createStore(favoriteColors);
// Subscription method to render according to state updated
store.subscribe(render);
function render() {
  console.log(store.getState());
}

// Add to and remove from store
store.dispatch(addColor("blue"));
store.dispatch(addColor("yellow"));
store.dispatch(addColor("green"));
store.dispatch(addColor("red"));
store.dispatch(addColor("gray"));
store.dispatch(addColor("orange"));
console.log(store.getState());
store.dispatch(removeColor("gray"));
console.log(store.getState());

ReactDOM.render(<Index/>, document.getElementById('root'));