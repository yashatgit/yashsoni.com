import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import React from 'react';

import ImageGrid from '../components/imageGrid';
import Blockquote, { Citation } from './elements/blockquote';
import Code from './elements/code';
import Em from './elements/em';
import { H1, H2, H3 } from './elements/text';
import Img from './elements/img';
import Li from './elements/li';
import Link from './elements/link';
import Ol from './elements/ol';
import Strong from './elements/strong';
import Ul from './elements/ul';

const components = {
  a: Link,
  blockquote: Blockquote,
  cite: Citation,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  img: Img,
  li: Li,
  ol: Ol,
  pre: Code,
  strong: Strong,
  ul: Ul,
  ImageGrid,
};

const MDXProvider = ({ children }) => {
  return <BaseMDXProvider components={components}>{children}</BaseMDXProvider>;
};

export default MDXProvider;
