import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import TILArticle from '../components/articles/til';
import tils from '../data/til_data';
import {spacing} from '../styles/vars';
import {heading} from '../styles/mixins';

const StyledArticlesTitle = styled.h1`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 2.5em;
    margin-bottom: ${spacing.xxs};
`;

const StyledArticlesDesc = styled.p`
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
        title={'Yash Soni - Today I Learned'}
    >
        <Nav />
        <Main>
            <StyledArticles>
                <StyledArticlesTitle>{'Today I Learned'}</StyledArticlesTitle>
                <StyledArticlesDesc>
                    This is not a blog, just a collection of small bits and pieces of knowledge I picked up on my way.
                    We learn something new every day, so I wanted to keep that gained knowledge accessible for later. It
                    also makes sharing easier. Most of it is just random thoughts and code snippets, with links to
                    further resources.
                </StyledArticlesDesc>
                <ul>
                    {tils.map((article) => (
                        <TILArticle article={article} key={article.slug || article.url} />
                    ))}
                </ul>
            </StyledArticles>
        </Main>
        <Footer />
    </Page>
);

export default Index;
