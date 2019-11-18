import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stuff extends React.Component {
    render() {
        return (
            <div>
                <> {/* <React.Fragment></React.Fragment> */}
                <h1 >Boring {Math.random() * 100} content</h1>
                <p /* Comment inside tag*/>Return</p>
                <p >List</p>
                </>
            </div>
        );
    }
}



// ============
ReactDOM.render(
    <div>
        <Stuff/>
    </div>,
    document.getElementById('root')
);