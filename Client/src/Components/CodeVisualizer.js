import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Import the "atom-one-dark" theme

const CodeVisualizer = ({ code }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef} className="hljs">
        {code}
      </code>
    </pre>
  );
};

export default CodeVisualizer;