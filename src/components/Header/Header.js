import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <h1 className={styles.Header}>
    TO-DO LIST
    <i className="fas fa-plus" />
  </h1>
);

export default Header;
