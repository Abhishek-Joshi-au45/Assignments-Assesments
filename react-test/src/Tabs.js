import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tabs() {
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('presentation');

    useEffect(() => {
        // Load the JSON data from assets
        axios.get('/response.json')
            .then(response => {
                setData(response.data.data.items.transcript_data);
            })
            .catch(error => {
                console.error('Error loading the JSON data', error);
            });
    }, []);

    const renderPresentationTab = () => {
        const presentationData = data?.presentation;
        if (!presentationData) return <p>Loading presentation data...</p>;

        return presentationData.map((participant, index) => (
            <div key={participant.participant_id}>
                <h2>Name : {participant.participant_name}</h2>
                <h4>{participant.participant_designation} at {participant.participant_company}</h4>
                <div className="transcript">
                    {participant.transcript_data.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                    ))}
                </div>
            </div>
        ));
    };

    const renderQnATab = () => {
        const QnAData = data?.questions_and_answers;
        if (!QnAData) return <p>Loading Q&A data...</p>;

        return QnAData.map((participant, index) => (
            <div key={participant.participant_id}>
                <h2>{participant.participant_name}</h2>
                <h4>{participant.participant_designation}</h4>
                 <h4>{participant.participant_company}</h4>
                <div className="transcript">
                    {participant.transcript_data.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                    ))}
                </div>
            </div>
        ));
    };

    const renderSummaryTab = () => {
        const summaryData = data?.participants.executives;
        if (!summaryData) return <p>Loading summary data...</p>;

        return summaryData.map((participant, index) => (
            <div key={participant.id}>
                <h2>Name : {participant.name}</h2>
                <p>{participant.designation} at <b>{participant.company}</b></p>
            </div>
        ));
    };

    const renderCallDataTab = () => {
        const callData = data?.participants.analyst;
        if (!callData) return <p>Loading call data...</p>;

        return callData.map((participant, index) => (
            <div key={participant.id}>
                <h2>Name : {participant.name}</h2>
                <p>{participant.designation} at <b>{participant.company}</b></p>
            </div>
        ));
    };

    return (
        <div>
            <ul className="tab-list">
                <li
                    className={activeTab === 'presentation' ? 'active' : ''}
                    onClick={() => setActiveTab('presentation')}
                >
                    Presentation
                </li>
                <li
                    className={activeTab === 'Q&A' ? 'active' : ''}
                    onClick={() => setActiveTab('Q&A')}
                >
                    Q&A
                </li>
                <li
                    className={activeTab === 'summary' ? 'active' : ''}
                    onClick={() => setActiveTab('summary')}
                >
                    Corporate Participant
                </li>
                <li
                    className={activeTab === 'call_data' ? 'active' : ''}
                    onClick={() => setActiveTab('call_data')}
                >
                    Conference Call Participant
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === 'call_data' && renderCallDataTab()}
                {activeTab === 'presentation' && renderPresentationTab()}
                {activeTab === 'Q&A' && renderQnATab()}
                {activeTab === 'summary' && renderSummaryTab()}
            </div>
        </div>
    );
}

export default Tabs;