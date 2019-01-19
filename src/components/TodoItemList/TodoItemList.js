import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import styles from './TodoItemList.module.css';

const TodoItemList = () => (
  <ul className={styles.TodoItemList}>
    <TodoItem task="do the dishes" />
    <TodoItem task="clean the table" />
  </ul>
);

export default TodoItemList;
