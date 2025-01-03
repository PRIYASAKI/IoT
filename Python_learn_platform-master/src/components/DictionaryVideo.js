import React from 'react';
import YouTube from 'react-youtube';

const DictionaryVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>Dictionary - Video Tutorial</h1>
            <YouTube videoId="wwrODmqc4jc" onReady={onReady} />
        </div>
    );
};

export default DictionaryVideo;
