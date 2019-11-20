import React from 'react';
import FlipMove from 'react-flip-move';
import './TodoItems.css';

class TodoItems extends React.Component {
    constructor(props) {
        super(props);

        // this.delete = this.delete.bind(this);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    // Returning tasks in form of list item
    createTasks(item) {
        return <li
            onClick={() => this.delete(item.key)}
            key={item.key}>
            {item.text}
        </li>
    }


    render() {
        let todoEntries = this.props.entries;
        // mapping listItems elements to <li> items using createTasks
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems