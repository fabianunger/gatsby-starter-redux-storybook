import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../../components/Image/Image';

storiesOf('Image', module)
  .add('Default', () => (
    <Image />
  ));
