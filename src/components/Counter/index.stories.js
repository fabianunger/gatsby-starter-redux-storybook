import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter from './index';

storiesOf('Counter', module)
    .add('default', () => (
        <Counter/>
    ))

