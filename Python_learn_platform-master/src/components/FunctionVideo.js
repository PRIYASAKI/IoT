import React from 'react';
import YouTube from 'react-youtube';

const FunctionVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>Function - Video Tutorial</h1>
            <YouTube videoId="LSedCocyJVg" onReady={onReady} />
        </div>
    );
};

export default FunctionVideo;
