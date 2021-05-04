import React, { useState } from 'react';
import {connect} from 'react-redux';

function TodoForm({ onSave }) {
    const [todo, setTodo] = useState({title: ''});


    function onFormSubmit(e) {
        e.preventDefault();

        // onSave(todo);

        setTodo({title: ''});
    }

    function onInputChange(e) {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );

}

function mapStateToProps(state) {
    return { list: state.list };
}

export default connect(mapStateToProps)(TodoForm)