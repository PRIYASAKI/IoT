import React from 'react';
import { useNavigate } from 'react-router-dom';

const DictionaryHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Dictionary Stage</h1>
            <button onClick={() => navigate('/list/text')} style={{ marginRight: '10px' }}>Text Reading</button>
            <button onClick={() => navigate('/list/video')} style={{ marginRight: '10px' }}>Video Tutorial</button>
            <button onClick={() => navigate('/list/test')} style={{ marginRight: '10px' }}>Take Test</button>
        </div>
    );
};

export default DictionaryHome;
