import React from "react";
import "./VideoInfo.scss"
import Eye from "../../assets/images/icons/views.svg";
import Heart from "../../assets/images/icons/likes.svg";

function VideoInfo() {

    return (
        <section className='video-info'>
            <div className='video-info__eq'>
                <h1 className='video-info__head'>

                </h1>

                <article className='video-info__legend'>
                    <div className='video-info__legend-left'>
                        <h3 className='video-info__legend-left-author'>

                        </h3>
                        <p className='video-info__legend-left-date'>

                        </p>
                    </div>

                    <div className='video-info__legend-right'>
                        <p className='video-info__legend-right-views'>
                            <img className='video-info__legend-right-views-img' alt="Views Icon" src={Eye} />
                            <span className='video-info__legend-right-views-count'>
                            
                            </span>
                        </p>
                        <p className='video-info__legend-right-likes'>
                            <img className='video-info__legend-right-likes-img' alt="Likes Icon" src={Heart} />
                            <span className='video-info__legend-right-likes-count'>
                                
                            </span>
                        </p>
                    </div>
                </article>

                <p className='video-info__paragraph'> 
                
                </p>
            </div>
        </section>
    );
}

export default VideoInfo;