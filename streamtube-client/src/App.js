import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing/Landing';
import UploadPage from "./pages/Upload/Upload"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
