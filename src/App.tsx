import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './view/index';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
