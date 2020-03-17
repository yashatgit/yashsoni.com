import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Article from '../components/articles/article';
import articles from '../data/articles';
import {spacing} from '../styles/vars';
import {heading} from '../styles/mixins';

const StyledArticlesTitle = styled.h1`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const StyledArticles = styled.section`
    margin-bottom: ${spacing.normal};
    vertical-align: top;

    @media (min-width: 768px) {
        display: inline-block;
    }
`;

const Index = () => (
    <Page
        description={'Thoughts on the software industry, programming, tech, videography, music, and my personal life.'}
        title={'Yash Soni - Blog'}
    >
        <Nav />
        <Main>
            <StyledArticles>
                <StyledArticlesTitle>{'Articles'}</StyledArticlesTitle>
                <ul>
                    {articles.map((article) => (
                        <Article article={article} key={article.slug || article.url} />
                    ))}
                </ul>
            </StyledArticles>
        </Main>
        <Footer />
    </Page>
);

export default Index;
