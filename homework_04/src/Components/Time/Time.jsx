import React from 'react';
import styles from './Time.module.css';

const Time = () => {
  return <div className={styles.time}>{new Date().toLocaleTimeString()}</div>;
};

export default Time;
