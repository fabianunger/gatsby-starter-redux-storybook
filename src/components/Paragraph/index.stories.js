import React from 'react';

import Paragraph from './index';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
}

export const Basic = () => <Paragraph />;
export const WithProp = () => <Paragraph content={'Heading'} />;
