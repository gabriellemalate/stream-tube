import "./VideoLibrary.scss"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function VideoLibrary() {

    return (
        <>
            <main className="library">
                <div className="library-eq">
                    <article>
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
                        <h2 className="library-list__head">All</h2>

                    </section>
                    <section className="library-list">
                        <h2 className="library-list__head">Favorites</h2>

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