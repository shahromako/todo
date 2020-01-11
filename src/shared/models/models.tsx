export interface Action {
    type: string,
    payload?: any
}

export interface TodoModel {
    id: number,
    todo: string,
    done: boolean
}

export interface InitialState {
    todoList: TodoModel[]
}

export interface StoreState {
    todoReducer: TodoReducer,
}

export interface TodoReducer {
    todoList: TodoModel[]
}

