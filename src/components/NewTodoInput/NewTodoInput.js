import React from 'react';
import styles from './NewTodoInput.module.css';

const NewTodoInput = () => (
  <input
    className={styles.NewTodoInput}
    type="text"
    name=""
    placeholder="Add New Todo"
  />
);

export default NewTodoInput;
