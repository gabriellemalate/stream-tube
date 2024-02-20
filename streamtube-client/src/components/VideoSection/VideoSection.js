import React, { useState }  from "react";
import "./VideoSection.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoControls from "../VideoControls/VideoControls";

function VideoSection({ selectedVideo, duration }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <section className='video'>
            <div className='video-eq'>
            <VideoPlayer
            selectedVideo={selectedVideo} 
            isPlaying={isPlaying}/>
            </div>
            <VideoControls
                selectedVideo={selectedVideo}
                duration={duration}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause} />
        </section>
    );
}

export default VideoSection;