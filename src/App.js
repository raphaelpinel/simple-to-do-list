import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/Header/Header';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import TodoItemList from './components/TodoItemList/TodoItemList';

library.add(faTrashAlt, faPlus);

class App extends Component {
  state = {
    displayInput: false
  };

  onToggleDisplayInput = () => {
    const newDisplayInput = !this.state.displayInput;
    return this.setState({ displayInput: newDisplayInput });
  };

  render() {
    return (
      <div className="App">
        <Header clicked={this.onToggleDisplayInput} />
        {this.state.displayInput ? <NewTodoInput /> : null}
        <TodoItemList />
      </div>
    );
  }
}

export default App;
