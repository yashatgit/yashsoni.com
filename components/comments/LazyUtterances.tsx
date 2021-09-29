import React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import ContentLoader from 'react-content-loader';
import { HR } from 'components/elements';

export const Fallback = () => (
  <ContentLoader
    height={200}
    width={'100%'}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="8" rx="3" ry="3" width="40%" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="30%" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="90%" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="80%" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);
Fallback.displayName = 'Fallback';

const Utterances = dynamic(() => import('./Utterances'), {
  loading: () => <Fallback />
});

// https://www.npmjs.com/package/react-intersection-observer
const LazyUtterances = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  return (
    <>
      <HR />
      <span ref={ref} />
      {inView && <Utterances />}
    </>
  );
};

export default LazyUtterances;
