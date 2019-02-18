import React, { useState } from "react";
import Play from "../../assets/images/icons/play.svg";
import Pause from "../../assets/images/icons/pause.svg";
import Expand from "../../assets/images/icons/fullscreen.svg";
import Volume from "../../assets/images/icons/volume_off.svg";
import "./VideoControls.scss";

function VideoControls() {

    return (
        <div className='video-controls'>
            <button className='video-controls__play' 
            
            >
                <img
                    className='video-controls__play-icon'
                    src=""
                    alt=""
                />
            </button>
            <div className='video-controls__eq'>
                <div className='video-controls__scrub'>
                    <input
                        type='range'
                        className='video-controls__scrubber'
                        value=""
                        
                    />
                    <p className='video-controls__scrub-time'>
                        
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
