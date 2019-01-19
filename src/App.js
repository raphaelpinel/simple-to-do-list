import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/Header/Header';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import TodoItem from './components/TodoItem/TodoItem';

library.add(faTrashAlt, faPlus);

class App extends Component {
  state = {
    displayInput: false,
    tasks: [
      { id: 0, content: 'clean the table w' },
      { id: 1, content: 'wash the floor' }
    ]
  };

  onToggleDisplayInput = () => {
    const newDisplayInput = !this.state.displayInput;
    return this.setState({ displayInput: newDisplayInput });
  };

  render() {
    const tasks = this.state.tasks;
    const tasksList = tasks.map(element => (
      <TodoItem key={element.id} task={element.content} />
    ));

    return (
      <div className="App">
        <Header clicked={this.onToggleDisplayInput} />
        {this.state.displayInput ? <NewTodoInput /> : null}
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default App;
