import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PresentationTab from './PresentationTab';
import QATab from './QATab';
import ExecutivesTab from './ExecutivesTab';
import AnalystsTab from './AnalystsTab';

const Tabs = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('presentation');

  useEffect(() => {
    // Load the JSON data
    axios.get('/assets/data.json')
      .then(response => {
        setData(response.data.data.items.transcript_data);
      })
      .catch(error => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('presentation')}>Presentation</button>
        <button onClick={() => setActiveTab('qa')}>Q&A</button>
        <button onClick={() => setActiveTab('executives')}>Corporate Participants</button>
        <button onClick={() => setActiveTab('analysts')}>Conference Call Participants</button>
      </div>
      <div className="tab-content">
        {activeTab === 'presentation' && <PresentationTab data={data.presentation} />}
        {activeTab === 'qa' && <QATab data={data.questions_and_answers} />}
        {activeTab === 'executives' && <ExecutivesTab data={data.participants.executives} />}
        {activeTab === 'analysts' && <AnalystsTab data={data.participants.analyst} />}
      </div>
    </div>
  );
};

export default Tabs;
