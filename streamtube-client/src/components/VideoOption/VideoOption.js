import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import "./VideoOption.scss"

function VideoOption({ videoData, isSelected
}) {
    const { id, title, channel, image, } = videoData;

    return (
        <Link to={`/videos/${id}`} className={`option ${isSelected ? "selected" : ""}`}>
            <img className='option-preview' src={image} alt="Next Video Preview" />
            <div className='option-text'>
                <h4 className='option-text-title'>{title}</h4>
                <p className='option-text-creator'>{channel}</p>
            </div>
        </Link>
    );
}

VideoOption.propTypes = {
    videoData: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default VideoOption;