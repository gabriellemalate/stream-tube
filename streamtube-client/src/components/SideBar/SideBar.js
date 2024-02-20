import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom'; 
import "./SideBar.scss";

function SideBar({ videoData, selectedVideo }) {
    const navigate = useNavigate();


    return (
        <section className='SideBar'>
            <div className='SideBar__all'>
                <h3 className='SideBar__head'>NEXT  VIDEOS</h3>
                {filteredVideoData.map((data) => (
                    <div key={data.id} className="SideBar__link" onClick={() => navigate(`/videos/${data.id}`)}>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}
SideBar.propTypes = {
    videoData: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object,
};
export default SideBar;
