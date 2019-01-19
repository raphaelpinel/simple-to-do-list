import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import TodoItemList from './components/TodoItemList/TodoItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewTodoInput />
        <TodoItemList />
      </div>
    );
  }
}

export default App;
