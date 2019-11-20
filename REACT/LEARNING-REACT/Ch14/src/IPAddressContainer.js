import React from 'react';


let xhr;

class IPAddressContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        // Creating new http GET request from url
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
        
        // Calling processRequest function when eventListener receives data
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        console.log(`ProcessRequest called. ReadyState: ${xhr.readyState}. Status: ${xhr.status}.`);
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return (
            <p>{this.state.ip_address}</p>
        );
    }
}

// Allow import from other module
export default IPAddressContainer;