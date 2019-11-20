import React from 'react';

class IPAddress extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.ip}</h1>
                <p>(This is your IP address... probably)</p>
            </div>
        );
    }
}

export default IPAddress;