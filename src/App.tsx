import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './view/index';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
