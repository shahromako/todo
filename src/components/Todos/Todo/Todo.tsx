import React from 'react';

import './todo.scss';

import { TodoModel } from '../../../shared/models/models';
import { deleteTodo, updateTodo } from '../../../redux/actions/todoAction';

import check from '../../../shared/assets/images/check_circle_icon.svg';
import circle from '../../../shared/assets/images/circle.svg';
import edit from '../../../shared/assets/images/edit_icon.svg';
import trash from '../../../shared/assets/images/trash_icon.svg';

const Todo = (props: TodoModel) => {

    const { id, todo, done } = props;

    return (
        <div className="Todo">
            <div className="todo-action-buttons">
                <button className="btn btn-sm btn-success" onClick={() => updateTodo(id)}><img src={done ? circle : check} alt="done" /></button>
                <button className="btn btn-sm btn-warning"><img src={edit} alt="edit" /></button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}><img src={trash} alt="delete" /></button>
            </div>
            <div className="todo-content">
                <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{todo}</span>
                {/* <textarea
                    className="form-control"
                    value={todo}
                    rows={1}>
                </textarea> */}
            </div>
        </div>
    )
}

export default Todo;