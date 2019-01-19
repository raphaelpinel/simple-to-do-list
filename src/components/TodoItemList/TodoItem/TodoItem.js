import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = props => (
  <li className={styles.TodoItem}>
    <span>
      <i className="fas fa-trash-alt" />
    </span>
    {props.task}
  </li>
);

export default TodoItem;
