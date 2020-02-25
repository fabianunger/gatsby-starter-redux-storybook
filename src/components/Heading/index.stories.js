import React from 'react';

import Heading from './index';

export default {
    title: 'Typography/Heading',
    component: Heading,
};

export const Default = () => <Heading/>;
export const LightGray = () => <Heading color={'lightgray'}/>;
export const Green = () => <Heading color={'green'}/>;
