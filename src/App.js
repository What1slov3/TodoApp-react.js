import React, { Fragment } from 'react';
import s from './App.module.css'
import Todo from './containers/todo/Todo';
import Title from './components/Title/Title';
import TodoList from './containers/todo-list/TodoList';

function App() {
  return (
    <div className={s.app_wrapper}>
      <Title title="WhaToDo" />
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;