import "./Upload.scss"
import React from "react";
import axios from "axios";
import publish from "../../assets/images/icons/publish.svg";
import preview from "../../assets/images/Upload-video-preview.png";


function UploadPage() {

    return (
        <>
            <main className="upload">
            <div className="upload-eq">
                    <h1 className="upload-head">Upload Video</h1>
                    <div className="upload-eq__all">
                        <article className="upload-thumb">
                            <h3 className="upload-thumb__head ">VIDEO THUMBNAIL</h3>
                            <img className="upload-thumb__preview" alt="Preview" src={bike} />
                        </article>

                        <div className="upload-eq__boxes">
                            <article className="upload-title">
                                <h3 className="upload-title__head">TITLE YOUR VIDEO</h3>
                                <input 
                                className="upload-title__box"
                                placeholder="Add a title to your video"
                                value={title}
                                
                                />
                            </article>

                            <article className="upload-description">
                                <h3 className="upload-description__head">ADD A VIDEO DESCRIPTION</h3>
                                <textarea
                                    className="upload-description__box"
                                    placeholder="Add a description to your video"
                                    value={description}
                                    
                                />
                            </article>
                        </div>
                    </div>



                    <div className="upload-buttons">
                        <button className="upload-button" 
                        onClick={handlePublish}
                        >
                            <div className="upload-button-eq">
                                <img className="upload-button-icon" src={publish} alt="Publish" />
                                PUBLISH
                            </div>
                        </button>
                        <Link to="/">
                            <button className="upload-cancel">
                                CANCEL
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UploadPage;