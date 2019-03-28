import config from './tailwind';
import PropTypes from 'prop-types';

const { screens } = config;

const screensPropObjectShape = screens;
Object.keys(screensPropObjectShape).map(
    key => (screensPropObjectShape[key] = PropTypes.string)
);

export const color = ({ color }) => {
    const values = Array.isArray(color) ? color : [color];
    return '';
};

color.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape(screensPropObjectShape),
    ]),
};
