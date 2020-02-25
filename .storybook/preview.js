import React from 'react';
import { addDecorator } from '@storybook/react';
import ReduxWrapper from '../src/_store/config';
import styled from 'styled-components';
import GlobalStyle from '../src/globalStyles/GlobalStyle';

const StoryWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;


addDecorator(storyFn =>
    <ReduxWrapper
        element={() =>
            <StoryWrapper>
                <GlobalStyle/>
                {storyFn()}
            </StoryWrapper>
        }/>
);
