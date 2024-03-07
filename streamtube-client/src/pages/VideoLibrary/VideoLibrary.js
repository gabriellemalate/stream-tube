import "./VideoLibrary.scss"
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import VideoOption from "../VideoOption/VideoOption";

function VideoLibrary() {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    // is selectedVideo truthy? if yes, then access its properties
    const filteredVideoData = videoData.filter(
        (video) => selectedVideo && video.id !== selectedVideo.id
    );

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

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

export default VideoLibrary;