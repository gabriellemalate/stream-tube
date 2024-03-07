import "./VideoLibrary.scss"
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import VideoOption from "../../components/VideoOption/VideoOption";

function VideoLibrary({ videoData, selectedVideo }) {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // Check if videoData is undefined or null before mapping through it
    if (!videoData) {
        return <div>No video data available</div>;
    }

    return (
        <>
            <main className="library">
                <div className="library-eq">
                    <article className="library-topper">
                        <h1 className="library-head">Your Videos</h1>
                        <div className='library-sort'>
                            <label
                                htmlFor="sort by"
                                className='library-sort__label'>
                                sort by
                            </label>
                            <select
                                className='library-sort__menu'
                            // onChange=
                            >
                                <optgroup className='library-sort__menu' label="sort by">
                                    <option className='library-sort__menu-option' name="sort" value="most played">
                                        most played
                                    </option>
                                    <option className='library-sort__menu-option' name="sort" value="newest">
                                        newest
                                    </option>
                                    <option className='library-sort__menu-option' name="sort" value="oldest">
                                        oldest
                                    </option>
                                    <option className='library-sort__menu-option' name="sort" value="length">
                                        length
                                    </option>
                                </optgroup>
                            </select>

                        </div>
                    </article>
                    <section className="library-list">
                        <h2 className="library-list__head">All Videos</h2>
                        {videoData.map((data) => (
                            <div
                                key={data.id}
                                className="library-list__item"
                                onClick={() => navigate(`/videos/${data.id}`)}>
                                <VideoOption
                                    key={data.id}
                                    videoData={data}
                                    isSelected={selectedVideo && selectedVideo.id === data.id}
                                />
                            </div>
                        ))}
                    </section>
                    <section className="library-list">
                        <h2 className="library-list__head">Favorites</h2>
                        <div className="library-list__item"></div>

                    </section>
                    <section className="library-mods">
                        <h3 className="library-mods__action">Make a New Playlist</h3>

                    </section>
                </div>
            </main>
        </>
    );
}
VideoLibrary.propTypes = {
    videoData: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object,
};
export default VideoLibrary;