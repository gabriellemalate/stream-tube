const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require("uuid");

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

module.exports = router;
