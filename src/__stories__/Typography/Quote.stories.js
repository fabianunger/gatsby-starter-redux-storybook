import React from 'react';

import Quote from '../../components/Quote/Quote';

export default {
  title: 'Typography/Quote',
  component: Quote,
}

export const ShortQuote = () => <Quote content={"Lorem ipsum"} />;
export const LongQuote = () => <Quote content={'This is a super long Quote, wow soooo long! - I forgot how actually said that'} />;
