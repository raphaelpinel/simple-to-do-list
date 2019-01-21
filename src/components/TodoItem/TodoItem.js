import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TodoItem.module.css';

const TodoItem = props => {
  const cssClasses = !props.completed
    ? styles.TodoItem
    : [styles.TodoItem, styles.completed].join(' ');
  return (
    <li className={cssClasses}>
      <span>
        <FontAwesomeIcon icon="trash-alt" onClick={props.delete} />
      </span>
      <div className={styles.noChange} onClick={props.toggleCompleted}>
        {props.task}
      </div>
    </li>
  );
};

export default TodoItem;
