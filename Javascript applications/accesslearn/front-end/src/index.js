import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Features from '../src/pages/Features.js';
import StudyBuddy from '../src/pages/actualfeatures/studybuddy.js';
import Voxify from '../src/pages/actualfeatures/voxify.js'; 
import ImageScribe from '../src/pages/actualfeatures/imagescribe.js'; 
import Help from '../src/pages/Help.js';
import Login from '../src/pages/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ChatAssistant from '../src/pages/actualfeatures/chatassisstant';
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/features" element={<Features />} /> 
        <Route path="/studybuddy" element={<StudyBuddy />} />
        <Route path="/voxify" element={<Voxify />} />
        <Route path="/imagescribe" element={<ImageScribe />} />
        <Route path="/help" element={<Help />} />
        <Route path="/chatassisstant" element={<ChatAssistant/>} />
        <Route path="/login" element={<Login />} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);