import React from 'react';
import PropTypes from 'prop-types';

import styles from './{{ pascalCase componentName }}.module.css';

export const {{ pascalCase componentName }} = (props) => (
    <div className={ styles.{{camelCase componentName}} } />
);

{{ pascalCase componentName }}.propTypes = {
    /** ID used for tracking and automation */
    appId: PropTypes.string,
};

{{ pascalCase componentName }}.defaultProps = {
    appId: '{{ camelCase componentName }}'
}