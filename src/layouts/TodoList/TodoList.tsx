import React from 'react';

import './todoList.scss';

import Navbar from '../../components/Navbar/Navbar';
import Todos from '../../components/Todos/Todos';

const TodoList = () => {
    return (
        <div className="TodoList">
            <div className="container">
                <Navbar />
                <Todos />
            </div>
        </div>
    )
}

export default TodoList;