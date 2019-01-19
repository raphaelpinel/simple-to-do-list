import React from 'react';
import styles from './NewTodoInput.module.css';

const NewTodoInput = props => (
  <input
    className={styles.NewTodoInput}
    type="text"
    name=""
    placeholder="Add New Todo"
    onChange={props.changed}
    onKeyUp={props.enter}
    value={props.value}
  />
);

export default NewTodoInput;
