import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing/Landing';
import UploadPage from "./pages/Upload/Upload"
import SelectedVideo from "./pages/Main/Main"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/videos/:videoId' element={<SelectedVideo />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
