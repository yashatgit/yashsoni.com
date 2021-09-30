import dynamic from 'next/dynamic';

const CNN_Handwriting_MNIST = dynamic(
  () =>
    import(
      /* webpackChunkName: "CNN_Handwriting_MNIST" */ './CNN_Handwriting_MNIST'
    )
);
const CNN_Handwriting_MNIST_Lazy = () => <CNN_Handwriting_MNIST />;

export { CNN_Handwriting_MNIST_Lazy };
