import React from "react";
import { render } from "react-dom";

class ShallowMerge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Mark', // name exists in initial state for user prop
                colors: {
                    favorite: '',
                }
            }
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            user: { // name doesn't exist in this state
                colors: {
                    favorite: 'blue'
                }
            }
        });
    }
    render(){
        return (
            <div>
                <h1>
                    My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}
                </h1>
                <button onClick={this.onButtonClick}>Show the color</button>
            </div>
        )
    }
}

render(
    <ShallowMerge/>,
    document.getElementById('root')

)