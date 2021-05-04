import React, { useState } from 'react';
import {connect} from 'react-redux';
import {setTodo} from '../store/actions/actions';

function TodoForm({ list, dispatch }) {
    const [newTodo, setNewTodo] = useState({title: ''});


    function onFormSubmit(e) {
        e.preventDefault();
        const arrayId = list.map((item) => item.id);
        const maxId = Math.max(...arrayId) + 1 + '';
        const newItem = {id: maxId, title: newTodo.title, isDone: false};
        const newTodoList = [...list, newItem]
        console.log(newTodo);
        dispatch(setTodo(newTodoList));
        setNewTodo({title: ''});
    }

    function onInputChange(e) {
        setNewTodo({...newTodo, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={newTodo.title}
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