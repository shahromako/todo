import React, { useState } from 'react';

import './navbar.scss';
import { addTodo } from '../../redux/actions/todoAction';
import { TodoModel } from '../../shared/models/models';

const Navbar = () => {

    const [todo, setTodo] = useState('');

    const addTodoHandler = () => {
        if (todo && todo.length > 0) {
            const newTodo: TodoModel = {
                id: 0,
                todo: todo,
                done: false
            }

            addTodo(newTodo);
            setTodo('');
        }
    }

    return (
        <div className="Navbar">
            <div className="navbar-body">
                <div className="form-group">
                    <textarea
                        className="form-control add-todo-input"
                        value={todo}
                        onChange={(e) => { setTodo(e.target.value) }}
                        rows={1}
                        placeholder="Введите то, что хотите...">
                    </textarea>
                </div>
                <button className="btn btn-info add-todo-button" onClick={addTodoHandler}>TODO: <del>add</del></button>
            </div>
        </div>
    )
}

export default Navbar;