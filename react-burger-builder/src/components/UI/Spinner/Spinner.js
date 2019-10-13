import React from 'react';

import styles from './Spinner.module.css';

const spinner = () => (
    <div style={{textAlign: 'center'}}><div className={styles.Loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
);

export default spinner;