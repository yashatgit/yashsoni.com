import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { lightTheme, darkTheme } from '../styles/theme';
import { spacing, mediaQuery } from '../styles/vars';

const buildCSSVars = theme =>
  Object.entries(theme).reduce((cssString, [prop, value], index) => {
    return (cssString += typeof value === 'object' ? '' : `--${prop}: ${value}; `);
  }, '');

const GlobalStyle = createGlobalStyle`
    ${reset}

    ::selection {
        background-color: #47A3F3;
        color: #fefefe;
    }
    
    html {
        box-sizing: border-box;
        font-family: Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        min-width: 320px;
        scroll-behavior: smooth;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }

    body {        
        background-color: var(--ui1);
        color: var(--text1);
        font-size: 15px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
        text-rendering: optimizeLegibility;  
        transition: background-color 0.4s
    }    

    table {  
        color: #333;
        width: 100%; 
        border-collapse: 
        collapse; border-spacing: 0;
    }
    
    td, th {  
        height: 30px; 
    }
    
    thead {
        background: var(--inlineCodeBg);
        border-radius: 5px;        
        font-size: 0.9rem;
    }

    th {
        color: var(--text1);
        font-weight: 500;
        text-align: left;
        padding: 5px;
    }
    
    td {
        color: var(--text1);
        padding: 5px;
        text-align: left;
    }    

    ${mediaQuery.l} {
        td code {
            white-space: nowrap;
        }
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

    a {
        color: var(--text1);
        cursor: pointer;
    }

    li p {
        margin: 0.2em 0;
    }

    p {
        margin: 1em 0;
        color: var(--text1);
    }

    code {
        color: var(--inlineCode);
        background-color: var(--inlineCodeBg);
        border-radius: 12px;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 14px;
        padding: .2em .4em;
    }

    pre {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 11px;
        line-height: 1.4em;
        margin: 0 0 ${spacing.normal};
        overflow-x: auto;
        padding: ${spacing.extralarge} ${spacing.normal};
        white-space: pre;
        background: var(--code);
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

        code {
            padding: 0;
            background: none;
            color: var(--codeBg);
        }
        margin-left: -20px;
        margin-right: -20px;
    }

    

    hr {
        border: 0;
        margin: ${spacing.large};
        text-align: center;

        &::before {
            content: '...';
            display: inline-block;
            letter-spacing: 1em;
            line-height: 1;
        }
    }
    
    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .dark-gallery img, .dark-image {
        -webkit-filter: invert(.862745) hue-rotate(180deg);
        filter: invert(.862745) hue-rotate(180deg);
    }

    .dark-mode {
        ${buildCSSVars(darkTheme)}
    }

    .light-mode {
        ${buildCSSVars(lightTheme)}
    }

    ${mediaQuery.l} {
        pre {
            font-size: 12px;
            border-radius: 8px;            
        } 
    }
    
    ${mediaQuery.m}{
        body {
            font-size: 18px;
            border-left: 10px solid #000;
            border-right: 10px solid #000;  
        }

        body:before, body:after {
            content: "";
            position: fixed;
            background: #000;
            left: 0;
            right: 0;
            height: 10px;
            z-index: 10;
        }
        body:before {
            top: 0;
        }
        body:after {
            bottom: 0;
        }          
    }    
`;

export default GlobalStyle;
