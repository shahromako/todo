import React from 'react';
import { connect } from 'react-redux';

import './todos.scss';
import Todo from './Todo/Todo';
import { TodoModel, StoreState } from '../../shared/models/models';

const Todos = (props: any) => {

    const todos = props && props.todos && props.todos.length > 0 ?
        props.todos.map((todo: TodoModel, index: number) =>
            <Todo {...todo} key={index} />
        ) : <></>

    return (
        <div className="Todos">
            {todos}
        </div>
    )
}

const mapStateToProps = (state: StoreState) => {
    return {
        todos: state.todoReducer.todoList
    }
}

// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps)(Todos);