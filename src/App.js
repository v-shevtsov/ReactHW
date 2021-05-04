import React from 'react';
import Todos from './modules/todos/components/Todos';
import {Provider} from 'react-redux';
import store from './modules/todos/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    );
}
