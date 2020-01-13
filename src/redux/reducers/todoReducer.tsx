import { TodoActionTypes } from '../actions/actionTypes';
import { InitialState, Action, TodoModel } from '../../shared/models/models';

const initialState: InitialState = {
    todoList: [
        { id: 1, todo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', done: false },
        { id: 2, todo: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', done: true },
        { id: 3, todo: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', done: false }
    ]
}

export const todoReducer = (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            action.payload.id = state.todoList.length > 0 ? state.todoList[state.todoList.length - 1].id + 1 : 0; // autocomplete of id
            const todoList = [...state.todoList, action.payload];
            const newState = {
                ...state,
                todoList
            }
            return newState;
        case TodoActionTypes.DELETE_TODO:
            const removed = removeTodo(state.todoList, action.payload)
            return {
                todoList: removed
            }
        case TodoActionTypes.UPDATE_TODO:
            const updated = updateTodo(state.todoList, action.payload)
            return {
                todoList: updated
            }
        default:
            return state;
    }
}

const removeTodo = (array: TodoModel[], id: number): TodoModel[] => {
    const todos = [...array];
    todos.map((todo, index) => {
        if (todo.id === id) {
            todos.splice(index, 1);
        }
    });

    return todos;
}

const updateTodo = (array: TodoModel[], id: number): TodoModel[] => {
    const todos = [...array];
    todos.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
    });

    return todos;
}