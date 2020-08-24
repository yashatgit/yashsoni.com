import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

const StyledCodeBlock = styled.div`
  position: relative;

  ${props =>
    props.language &&
    `
    &:before {
      content: '${props.language || ''}';
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 0.7rem;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: rgb(34, 34, 47);
      background: rgb(247, 223, 30);
      padding: 2px 10px;
      border-radius: 0px 0px 5px 5px;      
    }
    `}
`;

const Code = ({ children }) => {
  const codeElementProps = children.props;

  //https://mdxjs.com/guides/syntax-highlighting
  const language = codeElementProps.className?.replace(/language-/, '') ?? '';

  return (
    <StyledCodeBlock language={language}>
      <SyntaxHighlighter language={language} style={{ overflow: 'scroll' }} useInlineStyles={false}>
        <>{codeElementProps.children}</>
      </SyntaxHighlighter>
    </StyledCodeBlock>
  );
};

Code.defaultProps = {
  language: 'jsx',
};

export default Code;
