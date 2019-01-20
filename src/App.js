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
      { id: 0, content: 'clean the table' },
      { id: 1, content: 'wash the floor' },
      { id: 2, content: 'go running' }
    ],
    inputValue: ''
  };

  onToggleDisplayInput = () => {
    const newDisplayInput = !this.state.displayInput;
    return this.setState({ displayInput: newDisplayInput });
  };

  inputChangedHandler = event => {
    const newInputValue = event.target.value;
    this.setState({ inputValue: newInputValue });
  };

  addNewTaskHandler = event => {
    let updatedTasks = { ...this.state.tasks };
    let uniqueId =
      'id' +
      new Date().getTime().toString(36) +
      '-' +
      Math.floor(Math.random() * 35).toString(36);
    if (event.which === 13) {
      updatedTasks = Object.values(updatedTasks);
      updatedTasks = updatedTasks.concat({
        id: uniqueId,
        content: this.state.inputValue
      });
      this.setState({ tasks: updatedTasks, inputValue: '' });
    }
  };

  onDeleteTaskHandler = id => {
    const stateCopy = [...this.state.tasks];
    const updatedTasksList = stateCopy.filter(task => task.id !== id);
    this.setState({ tasks: updatedTasksList });
  };

  render() {
    const tasksList = this.state.tasks.map(element => (
      <TodoItem
        key={element.id}
        task={element.content}
        delete={() => this.onDeleteTaskHandler(element.id)}
      />
    ));

    return (
      <div className="App">
        <Header clicked={this.onToggleDisplayInput} />
        {this.state.displayInput ? (
          <NewTodoInput
            changed={event => this.inputChangedHandler(event)}
            enter={event => this.addNewTaskHandler(event)}
            value={this.state.inputValue}
          />
        ) : null}
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default App;
