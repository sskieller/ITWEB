import React from 'react';
import './MenuButton.css';

// is extra careful about re-rendering only when updates found
class MenuButton extends React.PureComponent {
    render() {
        console.log("Rendering: MenuButton");
        return (
            <button id="roundButton"
            /* When mouse down, props function handleMouseDown called */
            onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;