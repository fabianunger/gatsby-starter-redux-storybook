import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Counter from '../components/Counter';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

const IndexPage = () => (
    <Layout>
        <SEO title={'Home'}/>
        <Page>
            <Image/>

            <Heading as={'h1'} content={'+ Redux + Storybook'}/>
            <Text content={'Starter'}/>
            <Counter/>
        </Page>
    </Layout>
);

export default IndexPage;
