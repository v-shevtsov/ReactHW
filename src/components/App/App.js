import React, { Component } from 'react';
import './App.css';
import Todo from "../Todo/Todo";

class App extends Component {
    state = {
        todos: [
            {
                id: "14",
                title: "Costa Rican Colon North Carolina parsing",
                completed: true
            },
            {
                id: "16",
                title: "Industrial indexing context-sensitive",
                completed: false
            },
            {
                id: "18",
                title: "North Korean Won",
                completed: false
            },
            {
                id: "19",
                title: "Wooden Indiana",
                completed: true
            },
            {
                id: "20",
                title: "Assistant actuating implement",
                completed: false
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Todo todos={this.state.todos}/>
                </header>
            </div>
        );
    }
}

export default App;
