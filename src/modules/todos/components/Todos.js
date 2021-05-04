import React, {useEffect, useMemo} from 'react';
import {getTodos} from '../services/todosService';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useLocalStorage} from './hooks';
import Header from './Header';
import {connect} from 'react-redux';
import {deleteTodo, setStatusDone, setStatusLoading, setTodo, toggleTodo} from '../store/actions/actions';

function Todos({list, status, filter, dispatch}) {
    const [search, setSearch] = useLocalStorage('search');

    useEffect(() => {
        getTodos().then((data) => {
            dispatch(setTodo(data));
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter]);

    useEffect(() => {
        localStorage.setItem('search', search);
    }, [search]);

    useEffect(() => {
        dispatch(setStatusLoading());
        getTodos(search).then((data) => {
            dispatch(setStatusDone());
            dispatch(setTodo(data));
        });
    }, [search]);

    function onDelete(id) {
        dispatch(deleteTodo(id));
    }

    function onToggle(id) {
        const item = list.find((item) => item.id === id);
        const newItem = {...item, isDone: !item.isDone};
        dispatch(toggleTodo(newItem));
    }

    const filteredList = useMemo(() => {
        if (filter !== 'all') {
            return list.filter(
                item =>
                    (filter === 'done' && item.isDone) ||
                    (filter === 'notdone' && !item.isDone));
        } else {
            return list;
        }
    }, [filter, list]);

    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
            />
            {status === 'Loading' ?
                'loading...' : status === 'Done' ?
                    <TodoList
                        list={filteredList}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    /> : null}
            <TodoForm />
        </>
    );
}

function mapStateToProps(state) {
    return {list: state.list, status: state.status, filter: state.filter};
}

export default connect(mapStateToProps)(Todos);