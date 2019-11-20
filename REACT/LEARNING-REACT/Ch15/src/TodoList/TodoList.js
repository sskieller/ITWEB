import React from 'react';
import './TodoList.css';
import TodoItems from './TodoItems/TodoItems';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { text: "Do", key: 0 },
                { text: "You", key: 1 },
                { text: "Want", key: 2 },
                { text: "To", key: 3 },
                { text: "Build", key: 4 },
                { text: "A", key: 5 },
                { text: "Snowman", key: 6 }
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
        
        this._inputElement.focus();
        this._inputElement.value="";

        console.log(itemArray);

        // Prevent reloading page on submit
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        {/* Storing reference to input element */}
                        <input ref={(a) => this._inputElement = a} placeholder="enter task" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                    delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList