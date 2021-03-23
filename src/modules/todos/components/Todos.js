import React, { useEffect, useMemo, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services/todosService";
import TodoList from './TodoList';
import TodoForm from "./TodoForm";
import TodosFilter from "./TodosFilter";
import { useLocalStorage } from "./hooks";

export default function Todos() {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useLocalStorage('filter', 'all');
    const [search, setSearch] = useLocalStorage('search');
    const [status, setStatus] = useState(['Idle']);

    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter])

    useEffect(() => {
        localStorage.setItem('search', search);
    }, [search])

    useEffect(() => {
        setStatus('Loading');
        getTodos(search).then((data) => {
            setStatus('Done');
            setList(data);
        });
    }, [search])

    function toggleItem(id) {
        const item = list.find((l) => l.id === id);
        const newItem = {...item, completed: !item.completed};

        updateTodo(newItem).then(() => {
            setList(list.map((item) =>
                    item.id !== id ? item : newItem
                ),
            );
        });
    }

    function deleteItem(id) {
        deleteTodo(id);

        setList(list.filter((item) => item.id !== id))
    }

    function createItem(newItem) {
        newItem.completed = false;

        createTodo(newItem).then((data) => {
            setList([...list, data]);
        });
    }

    const filteredList = useMemo(() => {
        if (filter !== 'all') {
            return list.filter(
                item =>
                    (filter === 'done' && item.completed) ||
                    (filter === 'notdone' && !item.completed));
        } else {
            return list;
        }
    }, [filter, list])

    return (
        <>
            <TodosFilter
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearch={setSearch}
            />
            {status === 'Loading' ?
                'loading...' : status === 'Done' ?
                <TodoList
                    list={filteredList}
                    onToggle={toggleItem}
                    onDelete={deleteItem}
                /> : null}
            <TodoForm onSave={createItem}/>
        </>
    )
}