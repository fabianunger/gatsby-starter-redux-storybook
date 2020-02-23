import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/images/glogo.png';

const Img = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Image = () => (
  <Img src={Logo} alt="GatsbyJS with Redux and Storybook" />
);

export default Image;
