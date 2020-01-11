import { store } from '../../store';
import { TodoModel } from '../../shared/models/models';
import { TodoActionTypes } from './actionTypes';

export const addTodo = (state: TodoModel) => {
    store.dispatch({
        type: TodoActionTypes.ADD_TODO,
        payload: state
    });
}

export const updateTodo = (id: number) => {
    store.dispatch({
        type: TodoActionTypes.UPDATE_TODO,
        payload: id
    })
}

export const deleteTodo = (id: number) => {
    store.dispatch({
        type: TodoActionTypes.DELETE_TODO,
        payload: id
    });
}