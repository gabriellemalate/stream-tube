import React, { useState, useEffect }  from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing/Landing';
import UploadPage from "./pages/Upload/Upload";
import SelectedVideo from "./pages/Landing/Landing";
import Success from './components/Success/Success';
import NotFound from './components/NotFound/Notfound';
import UserPage from './pages/User/User';
import VideoLibrary from './pages/VideoLibrary/VideoLibrary';

function App() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Fetch video data from API
    const fetchVideoData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/videos");
        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/videos/:videoId' element={<SelectedVideo />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/sign' element={<UserPage />} />
          <Route path='/library' element={<VideoLibrary videoData={videoData} />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
