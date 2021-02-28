import React, { Component } from 'react';
import './App.css';
import TodoList from "../TodoList/TodoList";
import Header from "../Header/Header";

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
                <Header />
                <main className="App-header">
                    <TodoList todos={this.state.todos}/>
                </main>
            </div>
        );
    }
}

export default App;
