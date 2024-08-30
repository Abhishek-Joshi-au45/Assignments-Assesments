// src/components/QATab.js
import React from 'react';

const QATab = ({ data }) => {
  return (
    <div>
      <h2>Q&A Details</h2>
      {data.map((item, index) => (
        <div key={index}>
          <p><strong>Question:</strong> {item.question}</p>
          <p><strong>Answer:</strong> {item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QATab;
