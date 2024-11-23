import React from 'react';
import YouTube from 'react-youtube';

const SetVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>Set - Video Tutorial</h1>
            <YouTube videoId="CTg_To0PwI8" onReady={onReady} />
        </div>
    );
};

export default SetVideo;
