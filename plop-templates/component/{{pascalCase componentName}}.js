import React from 'react';
import PropTypes from 'prop-types';

import styles from './{{ pascalCase componentName }}.module.css';

export const {{ pascalCase componentName }} = (props) => (
    <div className={ styles.{{camelCase componentName}} } />
);

{{ pascalCase componentName }}.propTypes = {
    appId: PropTypes.string.isRequired,
};
