import React, {useEffect, useMemo} from 'react';
import {getTodos} from '../services/todosService';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useLocalStorage} from './hooks';
import Header from './Header';
import {connect} from 'react-redux';
import {setStatusDone, setStatusLoading, setTodo} from '../store/actions/actions';

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

    const filteredList = useMemo(() => {
        if (filter !== 'all') {
            return list.filter(
                item =>
                    (filter === 'done' && item.completed) ||
                    (filter === 'notdone' && !item.completed));
        } else {
            return list;
        }
    }, [filter, list]);

    return (
        <>
            <Header
                // filter={filter}
                // setFilter={setFilter}
                search={search}
                setSearch={setSearch}
            />
            {status === 'Loading' ?
                'loading...' : status === 'Done' ?
                    <TodoList
                        list={filteredList}
                    /> : null}
            <TodoForm />
        </>
    );
}

function mapStateToProps(state) {
    return {list: state.list, status: state.status, filter: state.filter};
}

export default connect(mapStateToProps)(Todos);