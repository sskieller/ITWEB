// Stateless functional components 3.2.4
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

// function Greeting(props) { // Stateless functional component
//     return <div>Hello {props.for}</div>
// }
// or using arrow function
const Greeting = (props) => <div>Hello {props.for}</div>;

Greeting.propTypes = { // Specifying propTypes and default values for stateless
    for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
    for: 'friend'
};

render(
    <Greeting for="Mark"/>,
    document.getElementById('root')
);


