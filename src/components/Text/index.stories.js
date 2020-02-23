import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './index';

storiesOf('Text', module)
  .add('Default', () => (
    <Text content={"Lorem ipsum doloret mitsum"}/>
  ));
