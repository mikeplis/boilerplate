import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../styles/utils';

export const Button = props => {
    const { onClick, children } = props;
    return (
        <button className="text-5xl" onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    /** onClick function */
    onClick: PropTypes.func,
    appId: PropTypes.string,
    ...color.propTypes,
};

Button.defaultProps = {
    appId: 'button',
};

export default Button;
