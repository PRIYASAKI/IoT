import React from 'react';
import { useNavigate } from 'react-router-dom';

const SetHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Set Stage</h1>
            <button onClick={() => navigate('/set/text')} style={{ marginRight: '10px' }}>Text Reading</button>
            <button onClick={() => navigate('/set/video')} style={{ marginRight: '10px' }}>Video Tutorial</button>
            <button onClick={() => navigate('/set/test')} style={{ marginRight: '10px' }}>Take Test</button>
        </div>
    );
};

export default SetHome;
