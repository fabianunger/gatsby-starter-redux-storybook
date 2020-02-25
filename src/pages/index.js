import React from 'react';

import Layout from '../global/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';
import Heading from '../components/Heading';
import Text from '../components/Paragraph';
import Page from '../components/Page';
import Counter from '../components/Counter';
import Quote from '../components/Quote';


const IndexPage = () => (
    <Layout>
        <SEO title={'Home'}/>
        <Page>
            <Image/>
            <Heading as={'h1'} content={'gatsby-starter-redux-storybook'}/>
            <Quote content={'Starter'}/>
            <Counter/>
        </Page>
    </Layout>
);

export default IndexPage;
