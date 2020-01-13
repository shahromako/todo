import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './navbar.scss';
import { addTodo } from '../../redux/actions/todoAction';
import { TodoModel, StoreState, TodoReducer } from '../../shared/models/models';

const Navbar = (props: TodoReducer) => {

    const [todo, setTodo] = useState('');
    const [done, setDone] = useState(0);
    const [notDone, setNotDone] = useState(0);

    useEffect(() => {
        let done: number = 0;
        let notDone: number = 0;
        props.todoList.map(todo => {
            todo.done ? done++ : notDone++
            setDone(done);
            setNotDone(notDone);
        })
    }, [props]);

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
                <div className="d-flex">
                    <div className="add-todo-button-content">
                        <button className="btn btn-info add-todo-button w-100" onClick={addTodoHandler}>TODO: <del>add</del></button>
                    </div>
                    <div className="todo-info">
                        <span className="badge badge-info todo-info-span">все: {props.todoList.length}</span>
                        <span className="badge badge-success todo-info-span">сделано: {done}</span>
                        <span className="badge badge-warning todo-info-span">не сделано: {notDone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: StoreState) => {
    return {
        todoList: state.todoReducer.todoList
    }
}

export default connect(mapStateToProps)(Navbar);