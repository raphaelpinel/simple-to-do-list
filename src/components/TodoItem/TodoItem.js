import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TodoItem.module.css';

const TodoItem = props => (
  <li className={styles.TodoItem}>
    <span>
      <FontAwesomeIcon icon="trash-alt" onClick={props.delete} />
    </span>
    {props.task}
  </li>
);

export default TodoItem;
