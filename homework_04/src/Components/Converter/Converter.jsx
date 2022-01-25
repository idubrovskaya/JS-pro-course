import React, { useState } from 'react';
import styles from './Converter.module.css';

const Converter = () => {
  const [usdValue, setUsd] = useState(0);
  const [bynValue, setByn] = useState(0);

  const converterUsd = (event) => {
    setUsd(() => event.target.value);
    const curByn = (event.target.value * 2.5752).toFixed(4);
    setByn(curByn);
  };

  const converterByn = (event) => {
    setByn(() => event.target.value);
    const curUsd = (event.target.value / 2.5752).toFixed(4);
    setUsd(curUsd);
  };

  return (
    <div className={styles.converterBlock}>
      <h1>Live currency converter</h1>
      <div className={styles.converter}>
        <p>Enter currency in $, USD:</p>
        <input value={usdValue} onChange={converterUsd}></input>
      </div>
      <div className={styles.converter}>
        <p>Enter currency in BYN:</p>
        <input value={bynValue} onChange={converterByn}></input>
      </div>
    </div>
  );
};

export default Converter;
