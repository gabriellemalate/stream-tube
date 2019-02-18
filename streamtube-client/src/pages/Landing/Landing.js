import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Landing.scss"
import axios from "axios";
import VideoSection from "../../components/VideoSection/VideoSection";

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

    return (
        <>
            <main className="main">
                <VideoSection selectedVideo={selectedVideo} duration={selectedVideo ? selectedVideo.duration : 0} />
            </main>
        </>
    );
}

export default LandingPage;