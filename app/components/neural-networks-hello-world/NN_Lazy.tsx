import dynamic from 'next/dynamic';

const NN = dynamic(() => import(/* webpackChunkName: "NN" */ './NN'));
const NN_Lazy = () => <NN />;

export { NN_Lazy };
