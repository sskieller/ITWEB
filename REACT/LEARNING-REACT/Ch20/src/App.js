import React from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';

// Map Redux state to component props (store updates)
function mapStateToProps(state) {
  return {
    countValue: state.count
  };
}

// Action (allowing component access to action creators and actions)
var increaseAction = {type: "increase"};
let decreaseAction = {type: "decrease"};

// map redux axtions to component props (Allow access to the inc/dec functions)
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      console.log("Dispatching increaseAction");
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      console.log("Dispatching decreaseAction");
      return dispatch(decreaseAction);
    }
  };
}


// The HOC (Higher Order Component) (Adds both map-functions into Counter component)
// Counter component gets access to: increaseCount, decreaseCount, countValue
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;