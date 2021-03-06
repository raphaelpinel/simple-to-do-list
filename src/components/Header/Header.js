import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.css';

const Header = props => (
  <h1 className={styles.Header}>
    TO-DO LIST
    <FontAwesomeIcon
      className={styles.plus}
      icon="plus"
      onClick={props.clicked}
    />
  </h1>
);

export default Header;
