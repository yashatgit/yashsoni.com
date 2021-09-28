import Link from 'next/link';
import Image from 'next/image';
import Step from 'components/Step';
import Book from 'components/Book';
import { NN_Lazy } from 'data/blog/neural-networks-hello-world/NN_Lazy';
import { CNN_Handwriting_MNIST_Lazy } from 'data/blog/handwriting-recognition-using-CNN/CNN_Handwriting_MNIST_Lazy';

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

const MDXComponents = {
  Image,
  a: CustomLink,
  Step,
  Book,
  MediaGrid,
  NN_Lazy,
  CNN_Handwriting_MNIST_Lazy
};

export default MDXComponents;
