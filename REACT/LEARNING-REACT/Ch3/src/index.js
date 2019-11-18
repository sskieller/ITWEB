import React from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends React.Component {
    render() {
        return ( 
                <p>Helloo {this.props.greetTarget}</p>
        );
    }
}

class Buttonify extends React.Component {
    render() {
        return (
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
    <Buttonify behavior="submit">SEND DATA</Buttonify>
    </div>
    ,
    document.getElementById('root')
);
