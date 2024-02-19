import React, { useRef, useEffect }from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.scss"

function VideoPlayer({ selectedVideo, isPlaying }) {
    const videoRef = useRef(null);
    const videoUrl = selectedVideo ? selectedVideo.video : "";
    const posterImageUrl = selectedVideo ? `${selectedVideo.image}`: "";

    useEffect(() => {
        const video = videoRef.current;

        if (isPlaying) {
            video.play();
        } else {
            video.pause();
        }
    }, [isPlaying]);

    return (
        <video ref={videoRef} autoPlay className='video-vid' poster={posterImageUrl}>
            <source className='video-vid__source' src={videoUrl} />
        </video>
    );
}

VideoPlayer.propTypes = {
    selectedVideo: PropTypes.object,
    isPlaying: PropTypes.bool,
};

export default VideoPlayer;