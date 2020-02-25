import React from 'react';
import Logo from '../../assets/images/gatsby-starter-redux-storybook-bg.png';
import { ImageWrapper } from './Image.style';

const Image = () => (
    <ImageWrapper src={Logo} alt="GatsbyJS with Redux and Storybook"/>
);

export default Image;
