import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './index';

storiesOf('Heading', module)
    .add('default', () => (
        <Heading content={'Heading'}/>
    ))
    .add('gray', () => (
    <Heading content={'Heading'} color={'gray'}/>
))
    .add('black', () => (
    <Heading content={'Heading'} color={'black'}/>
));
