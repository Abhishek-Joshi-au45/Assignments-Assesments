import React from 'react';

const AnalystsTab = ({ data }) => {
  return (
    <div>
      <h2>Conference Call Participants</h2>
      {data.map((analyst) => (
        <div key={analyst.id}>
          <p>
            <strong>{analyst.name}</strong> - {analyst.designation} at {analyst.company}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnalystsTab;
