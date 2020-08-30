import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [markdown, setMarkdown] = useState('# hey');

  function handleTextAreaChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleTextAreaChange} value={markdown} />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
