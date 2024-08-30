import React from 'react';

const ExecutivesTab = ({ data }) => {
  return (
    <div>
      <h2>Corporate Participants</h2>
      {data.map((executive) => (
        <div key={executive.id}>
          <p>
            <strong>{executive.name}</strong> - {executive.designation} at {executive.company}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExecutivesTab;
