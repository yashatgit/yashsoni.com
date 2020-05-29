import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Code = ({ children, language }) => {
  const codeElementProps = children.props;

  return (
    <SyntaxHighlighter language={language} style={{ overflow: 'scroll' }} useInlineStyles={false}>
      <>{codeElementProps.children}</>
    </SyntaxHighlighter>
  );
};

Code.defaultProps = {
  language: 'jsx',
};

export default Code;
