import React, { Fragment } from 'react';
import './App.css'
import Todo from './containers/todo/Todo';
import Title from './components/Title/Title';
import TodoList from './containers/todo-list/TodoList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ImportantTasks from './containers/importantTasks/ImportantTasks';
import today_tasks from './containers/today_tasks/today_tasks';

function App() {
  return (
    <div className="app_wrapper">
      <Title title="WhaToDo" />
      <div className="app_wrapper__content">
        <Switch>
          <Route exact path='/' component={Todo}></Route>
          <Route path='/favorites' component={ImportantTasks}></Route>
          <Route path='/today' component={today_tasks}></Route>
        </Switch>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
