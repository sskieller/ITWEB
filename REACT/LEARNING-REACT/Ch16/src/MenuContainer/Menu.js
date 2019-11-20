import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        console.log("Rendering: Menu");

        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}
            >
                <h2><a href="#">Home</a></h2>
                <h2><a href="#">Heom</a></h2>
                <h2><a href="#">Hoem</a></h2>
                <h2><a href="#">Hemo</a></h2>

            </div>
        );
    }
}

export default Menu;