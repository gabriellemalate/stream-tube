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
                    <div className='add-mood-quick__sleep-form-hours'>
                                    <label htmlFor="hours slept" className='add-mood-quick__sleep-form-hours-head'>hours slept</label>
                                    <select
                                        className='add-mood-quick__sleep-form-hours-menu'
                                        onChange={(e) => handleNumberChange('hours', parseInt(e.target.value))}
                                    >
                                        <optgroup className='add-mood-quick__sleep-form-menugroup' label="number of hours">
                                            <option className='add-mood-quick__sleep-form-menugroup-option' name="hours" value="0">
                                                0
                                            </option>
                                            <option className='add-mood-quick__sleep-form-menugroup-option' name="hours" value="1">
                                                under 1 hour
                                            </option>
                                            <option className='add-mood-quick__sleep-form-menugroup-option' name="hours" value="1">
                                                1 hour
                                            </option>
                                            <option className='add-mood-quick__sleep-form-menugroup-option' name="hours" value="2">
                                                2 hours
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
                    <section className="library-list">
                        <h2 className="library-list__head">Most Played</h2>

                    </section>
                </div>
            </main>
        </>
    );
}

export default VideoLibrary;