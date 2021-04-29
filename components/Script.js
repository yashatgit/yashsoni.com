// https://github.com/vercel/next.js/issues/160#issuecomment-298814901
export default ({ children }) => <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }}></script>;
