import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}