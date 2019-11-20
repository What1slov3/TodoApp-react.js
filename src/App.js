import React, { Fragment } from 'react';
import './App.css'
import Todo from './containers/todo/Todo';
import Title from './components/Title/Title';
import TodoList from './containers/todo-list/TodoList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ImportantTasks from './containers/importantTasks/ImportantTasks';

function App() {
  return (
    <div className="app_wrapper">
      <Title title="WhaToDo" />
      <div className="app_wrapper__content">
        <Switch>
          <Route exact path='/' component={Todo}></Route>
          <Route path='/favorites' component={ImportantTasks}></Route>
        </Switch>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
