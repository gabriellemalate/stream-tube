import "./Upload.scss"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import publish from "../../assets/images/icons/publish.svg";
import preview from "../../assets/images/Upload-video-preview.png";


function UploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [inputError, setInputError] = useState({ 
        title: false, 
        description: false, 
        videoUrl: false,
        thumbnail: false, 
    });

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleVideoUrlChange = (e) => {
        setVideoUrl(e.target.value);
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(URL.createObjectURL(file));
        }
    };

    const handlePublish = async () => {
        // validate that both title and description are provided
        if (!title.trim() || !description.trim() || !videoUrl.trim() || !thumbnail) {
            setError("You must provide a title, a description, a video URL, and a thumbnail image.");
            setInputError({
                title: !title.trim(),
                description: !description.trim(),
                videoUrl: !videoUrl.trim(),
                thumbnail: !thumbnail,
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append("image", thumbnail); // Append the file to form data
            formData.append("title", title);
            formData.append("description", description);
            formData.append("video", videoUrl);

            const response = await axios.post("http://localhost:8080/videos", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set content type for FormData
                },
            });

            console.log("Server response:", response.data);
            // redirect to success page
            navigate("/success");
        } catch (error) {
            console.error("Error uploading video:", error.response);
            setError("An error occurred during upload. Please try again.");
        }
    };

    return (
        <>
            <main className="upload">
                <div className="upload-eq">
                    <h1 className="upload-head">Upload Video</h1>
                    <div className="upload-eq__all">
                        <article className="upload-thumb">
                            <h3 className="upload-thumb__head ">VIDEO THUMBNAIL</h3>
                            {thumbnail ? (
                                <img className="upload-thumb__preview" alt="Preview" src={thumbnail} />
                            ) : (
                                <img className="upload-thumb__preview" alt="Preview" src={preview} />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                                className={`upload-thumb__file ${inputError.thumbnail ? "error" : ""}`}
                            />
                        </article>

                        <div className="upload-eq__boxes">
                            <article className="upload-title">
                                <h3 className="upload-title__head">TITLE YOUR VIDEO</h3>
                                <input
                                    className={`upload-title__box ${inputError.title ? "error" : ""}`}
                                    placeholder="Add a title to your video"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </article>

                            <article className="upload-description">
                                <h3 className="upload-description__head">ADD A VIDEO DESCRIPTION</h3>
                                <textarea
                                    className={`upload-description__box ${inputError.description ? "error" : ""}`}
                                    placeholder="Add a description to your video"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                />
                            </article>

                            <article className="upload-link">
                                <h3 className="upload-link__head">VIDEO URL</h3>
                                <textarea
                                    className={`upload-link__box ${inputError.videoUrl ? "error" : ""}`}
                                    placeholder="Add the link to your video here"
                                    value={videoUrl}
                                    onChange={handleVideoUrlChange}
                                />
                            </article>
                        </div>
                    </div>

                    {error && <div className="upload-error">{error}</div>}

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