import React from 'react';
import PropTypes from 'prop-types';

import { ParagraphWrapper } from './Paragraph.style';

const Paragraph = ({ content, ...props }) => (
    <ParagraphWrapper {...props}>{content}</ParagraphWrapper>
);

export default Paragraph;

Paragraph.propTypes = {
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

Paragraph.defaultProps = {
    as: 'p',
    content: 'Lorem ipsum'
};
