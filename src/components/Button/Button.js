import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onClick, children }) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    appId: PropTypes.string.isRequired,
};
