import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Landing />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
