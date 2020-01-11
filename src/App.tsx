import React from 'react';

import './App.scss';
import TodoList from './layouts/TodoList/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
