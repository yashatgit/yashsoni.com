import React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const Utterances = dynamic(() => import('./Utterances'));

// https://www.npmjs.com/package/react-intersection-observer
const LazyUtterances = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  return (
    <>
      <hr ref={ref} />
      {inView && <Utterances />}
    </>
  );
};

export default LazyUtterances;
