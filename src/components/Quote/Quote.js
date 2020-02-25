import React from 'react';
import PropTypes from 'prop-types';
import { QuoteWrapper } from './Quote.style';

const Quote = ({ content, ...props }) => (
    <QuoteWrapper {...props}>{content}</QuoteWrapper>
);

export default Quote;

Quote.propTypes = {
    content: PropTypes.string,
    as: PropTypes.string,
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

Quote.defaultProps = {
    as: 'p',
    content: 'Lorem ipsum'
};
