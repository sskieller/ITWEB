import React from 'react';
import './MenuContainer.css';
import MenuButton from './MenuButton';
import Menu from './Menu'

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    // Dealing with click events on button and menu
    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");

        // Stops the event from calling through the component chain
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        console.log("Rendering: MenuContainer");
        return(
            <div>
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            <Menu handleMouseDown={this.handleMouseDown}
                menuVisibility={this.state.visible}/>
                <div>
                    <p>Spot item who don't belong</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>A</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default MenuContainer;