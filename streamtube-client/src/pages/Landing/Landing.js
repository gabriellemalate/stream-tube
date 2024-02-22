import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Landing.scss"
import axios from "axios";
import VideoSection from "../../components/VideoSection/VideoSection";
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import SideBar from "../../components/SideBar/SideBar";
import Comments from "../../components/CommentSection/CommentSection";

const apiUrl = "http://localhost:8080";

function LandingPage() {
    const [videoData, setVideoData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [duration, setDuration] = useState(0);
    const navigate = useNavigate();
    const { videoId } = useParams();


    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/videos`);
            if (response.data.length > 0) {
                setVideoData(response.data);

                const selected =
                    videoId && response.data.find((video) => video.id === videoId);

                setSelectedVideo(selected || response.data[0]);
            } else {
                console.error("No videos found in the response.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [videoId]);

    const fetchSelectedVideoDetails = async () => {
        if (selectedVideo) {
            try {
                const response = await axios.get(`${apiUrl}/videos/${selectedVideo.id}`);

                if (response.data) {
                    const { duration } = response.data;
                    setDuration(duration);
                    setSelectedVideo(response.data);
                } else {
                    console.error("No details found for the selected video.");
                }
            } catch (error) {
                console.error("Error fetching selected video details:", error);
            }
        }
    };

    useEffect(() => {
        if (selectedVideo && !selectedVideo.comments) {
            fetchSelectedVideoDetails();
        }
    }, [selectedVideo]);

    const addComment = (newComment) => {
        setSelectedVideo((prevSelectedVideo) => ({
            ...prevSelectedVideo,
            comments: [...prevSelectedVideo.comments, newComment],
        }));
    };

    const handleSelectVideo = (selectedVideo) => {
        // update URL when a video is selected
        navigate(`/videos/${selectedVideo.id}`);
        setSelectedVideo(selectedVideo);
    };

    return (
        <>
            <main className="main">
                <VideoSection selectedVideo={selectedVideo} duration={selectedVideo ? selectedVideo.duration : 0} />
                <div className="main-eq">
                    <section className="main-eq__all">
                        {loading ? (
                            <h2 className="main-eq__section-load">Loading...</h2>
                        ) : (
                            <>
                                <div className="main-eq__section">
                                    <VideoInfo videoData={selectedVideo || videoData[0]} />
                                    <Comments
                                    videoData={selectedVideo}
                                    onAddComment={addComment}
                                />
                                </div>
                                <SideBar
                                    videoData={videoData}
                                    onSelect={handleSelectVideo}
                                    selectedVideo={selectedVideo}
                                />
                            </>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
}

export default LandingPage;