import React from "react";
import { render } from "react-dom";

class Secret extends React.Component { // Access to persistent component state
  constructor(props) {
    super(props);
    this.state = {
      name: "top secret!" // Initial state for no undefined errors
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
      console.log(this.state.name)
      if (this.state.name !== "Mark") {
        this.setState(() => ({ // setState for API for modifying state
            name: "Mark"
          }));
      }
      else {
        this.setState(() => ({ // function{parameter}
            name: "Not Mark"
          }));
      }
    
  }
  render () {
      return (
          <div>
              <h1>
                  My name is {this.state.name}
              </h1>
              {/* Binds the click event to the onButtonClick method */}
              <button onClick={this.onButtonClick}>Reveal the secret</button> 
          </div>
      )
  }
}

render(
    <Secret/>,
    document.getElementById('root')
);
