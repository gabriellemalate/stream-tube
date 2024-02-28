import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing/Landing';
import UploadPage from "./pages/Upload/Upload";
import SelectedVideo from "./pages/Landing/Landing";
import Success from './components/Success/Success';
import NotFound from './components/NotFound/Notfound';
import UserPage from "./pages/User/User";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/videos/:videoId' element={<SelectedVideo />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/sign' element={<UserPage/>} />
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
