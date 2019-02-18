import React, { useRef}from "react";
import "./VideoVid.scss"

function VideoVid() {
    const videoRef = useRef(null);
    const videoUrl = selectedVideo ? selectedVideo.video : "";
    const posterImageUrl = selectedVideo ? `${selectedVideo.image}`: "";

    return (
        <video ref={videoRef} autoPlay className='video-vid' poster={posterImageUrl}>
            <source className='video-vid__source' src={videoUrl} />
        </video>
    );
}

export default VideoVid;