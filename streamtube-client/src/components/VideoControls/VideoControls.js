import React, { useState } from "react";
import Play from "../../assets/images/icons/play.svg";
import Pause from "../../assets/images/icons/pause.svg";
import Expand from "../../assets/images/icons/fullscreen.svg";
import Volume from "../../assets/images/icons/volume_off.svg";
import "./VideoControls.scss";

function VideoControls({ duration, isPlaying, onPlayPause }) {
    const [currentTime] = useState(0);

    const formatTime = (timeInSeconds) => {
        if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds)) {
            return "0:00";
        }
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className='video-controls'>
            <button className='video-controls__play' 
            onClick={onPlayPause}
            >
                <img
                    className='video-controls__play-icon'
                    src={isPlaying ? Pause : Play}
                    alt={isPlaying ? "Pause" : "Play"}
                />
            </button>
            <div className='video-controls__eq'>
                <div className='video-controls__scrub'>
                    <input
                        type='range'
                        className='video-controls__scrubber'
                        value={currentTime}
                        max={duration}
                    />
                    <p className='video-controls__scrub-time'>
                    {`${formatTime(currentTime)}/${formatTime(duration)}`}
                    </p>
                </div>
            </div>
            <div className='video-controls__right'>
                <p className='video-controls__right-link'>
                    <img
                        className='video-controls__right-expand'
                        src={Expand}
                        alt='Full Screen'
                    />
                </p>
                <p className='video-controls__right-link'>
                    <img
                        className='video-controls__right-volume'
                        src={Volume}
                        alt='Volume On/Off'
                    />
                </p>
            </div>
        </div>
    );
}

export default VideoControls;
