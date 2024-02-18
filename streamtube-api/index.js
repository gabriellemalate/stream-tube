const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const videosRouter = require('./routes/videos');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/videos', videosRouter);

app.use(bodyParser.json());
// start
app.listen(PORT, () => {
    console.log(`server port: ${PORT}`);
});