import React from 'react';
import PropTypes from 'prop-types';
import { HeadingWrapper } from './Heading.style';

const Heading = ({ content, ...props }) => (
    <HeadingWrapper {...props}>{content}</HeadingWrapper>
);

export default Heading;

Heading.propTypes = {
    content: PropTypes.string,
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    color: PropTypes.string,
    fontFamily: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),
    textAlign: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),
    lineHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),
    letterSpacing: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),
};

Heading.defaultProps = {
    as: 'h2',
    fontWeight: 'bold',
    color: '#555',
    content: 'Heading'
};
