import React from "react";
import "./VideoSection.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoSection() {

    return (
        <section className='video'>
            <div className='video-eq'>
            <VideoVid 
            selectedVideo={selectedVideo} 
            />
            </div>

        </section>
    );
}

export default VideoSection;