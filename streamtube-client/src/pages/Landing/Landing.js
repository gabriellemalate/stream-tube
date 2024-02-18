import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Landing.scss"
import axios from "axios";
import VideoSection from "../../components/VideoSection/VideoSection";

function LandingPage() {
    const [videoData, setVideoData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
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

    return (
        <>
            <main className="main">
                <VideoSection selectedVideo={selectedVideo} duration={selectedVideo ? selectedVideo.duration : 0} />
            </main>
        </>
    );
}

export default LandingPage;