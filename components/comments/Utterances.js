import React, { Component } from 'react';
import useDarkMode from 'use-dark-mode';

const Utterances = () => {
  const darkMode = useDarkMode(false);
  const isDarkThemeEnabled = darkMode.value;
  const commentElemRef = React.useRef();
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    function setAttributes(element, attributes) {
      Object.keys(attributes).forEach(function(name) {
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
      theme: isDarkThemeEnabled ? 'photon-dark' : 'github-light',
    });

    //scriptEl.onload = () => setPending(false);
    const currentChildNode = commentElemRef.current.childNodes[0];
    currentChildNode && commentElemRef.current.replaceChild(scriptEl, currentChildNode);
  }, [isDarkThemeEnabled]);

  return (
    <div className="react-utterences" ref={commentElemRef}>
      {pending && <div>Loading comments...</div>}
    </div>
  );
};

export default Utterances;
