import React from 'react';
import { useTheme } from 'components/hooks/useTheme';

const Utterances = () => {
  const { isDarkMode } = useTheme();
  const commentElemRef = React.useRef<HTMLDivElement>(null);
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    function setAttributes(element, attributes) {
      Object.keys(attributes).forEach(function (name) {
        element.setAttribute(name, attributes[name]);
      });
    }
    const scriptEl = document.createElement('script');
    //https://utteranc.es/
    setAttributes(scriptEl, {
      async: true,
      repo: 'yashatgit/yashsoni.com',
      src: 'https://utteranc.es/client.js',
      crossorigin: 'anonymous',
      'issue-term': 'pathname',
      label: 'discussions',
      theme: isDarkMode ? 'photon-dark' : 'github-light'
    });
    if (commentElemRef.current) {
      //scriptEl.onload = () => setPending(false);
      const currentChildNode = commentElemRef.current.childNodes[0];
      currentChildNode &&
        commentElemRef.current.replaceChild(scriptEl, currentChildNode);
    }
  }, [isDarkMode]);

  return (
    <div className="react-utterences" ref={commentElemRef}>
      {pending && <div>Loading comments...</div>}
    </div>
  );
};

export default Utterances;
