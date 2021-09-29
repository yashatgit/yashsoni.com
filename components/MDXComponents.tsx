import Link from 'next/link';
import Image from 'next/image';
import Step from 'components/Step';
import Book from 'components/Book';
import { NN_Lazy } from 'data/blog/neural-networks-hello-world/NN_Lazy';
import { CNN_Handwriting_MNIST_Lazy } from 'data/blog/handwriting-recognition-using-CNN/CNN_Handwriting_MNIST_Lazy';

function getLanguage(str) {
  const regexp = /language-([^\s]+)/g;
  const matches = [...str.matchAll(regexp)];
  return matches[0]?.[1];
}

import MediaGrid from 'components/mediaGrid';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomPre = (props) => {
  const language = getLanguage(props.children.props?.className ?? '');
  return (
    <div className="relative">
      {language ? <span className="code-tag">{language}</span> : null}
      <pre>{props.children}</pre>
    </div>
  );
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Step,
  Book,
  MediaGrid,
  NN_Lazy,
  pre: CustomPre,
  CNN_Handwriting_MNIST_Lazy
};

export default MDXComponents;
