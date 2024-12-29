import React from 'react';
import YouTube from 'react-youtube';

const ConditionalVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>Conditional - Video Tutorial</h1>
            <YouTube videoId="Zp5MuPOtsSY" onReady={onReady} />
        </div>
    );
};

export default ConditionalVideo;
