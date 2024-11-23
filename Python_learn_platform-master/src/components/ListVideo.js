import React from 'react';
import YouTube from 'react-youtube';

const ListVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>List - Video Tutorial</h1>
            <YouTube videoId="9OeznAkyQz4" onReady={onReady} />
        </div>
    );
};

export default ListVideo;
