const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require("uuid");

// read video data from json file
function readVideosData() {
    const videosPath = path.join(__dirname, '../data', 'videos.json');
    const videosData = fs.readFileSync(videosPath, 'utf-8');
    return JSON.parse(videosData);
}

// write video data to JSON file
function writeVideosData(videos) {
    const videosPath = path.join(__dirname, '../data', 'videos.json');
    fs.writeFileSync(videosPath, JSON.stringify(videos, null, 2), 'utf-8');
}

router.get('/', (req, res) => {
    const videos = readVideosData();
    res.json(videos.map(({ id, title, channel, image }) => ({ id, title, channel, image })));
});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    const videos = readVideosData();
    const video = videos.find((v) => v.id === videoId);
    if (video) {
        video.image = `${video.image}`;
        res.json(video);
    } else {
        res.status(404).json({ message: 'a video with that ID does not exist' });
    }
});

router.post('/', (req, res) => {
    const { title, description } = req.body;

    const newVideoId = uuidv4();

    const newVideo = {
        id: newVideoId,
        title,
        description,
        channel: 'BrainStation',
        image: 'Upload-video-preview.jpg',
        views: '0',
        likes: '0',
        duration: "4:20",
        video: "https://youtu.be/pWOVEI2u12g",
        timestamp: Date.now(),
        comments: [],
    };

    const videos = readVideosData();

    // add the new video to videos array
    videos.push(newVideo);

    writeVideosData(videos);

    res.status(201).json(newVideo);
});

module.exports = router;
