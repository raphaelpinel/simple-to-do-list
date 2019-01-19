import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/Header/Header';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import TodoItemList from './components/TodoItemList/TodoItemList';

library.add(faTrashAlt, faPlus);

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
