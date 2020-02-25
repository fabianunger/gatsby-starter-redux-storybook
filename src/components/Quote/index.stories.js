import React from 'react';

import Quote from './index';

export default {
  title: 'Typography/Quote',
  component: Quote,
}

export const Basic = () => <Quote />;
export const WithProp = () => <Quote content={'Quote'} />;
