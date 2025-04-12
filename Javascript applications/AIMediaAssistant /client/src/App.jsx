import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/common/Header.jsx';
import MainPage from '../src/pages/MainPage.jsx';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<div>About Us Page</div>} />
             <Route path="/contact" element={<div>Contact Page</div>} />
             <Route path="/help" element={<div>Help Page</div>} />
            {/* Add other routes here as needed */}
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Catch-all route */}
          </Routes>
        </main>
        <footer className="bg-gray-100 text-gray-600 p-4 text-center">
          © {new Date().getFullYear()} My App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
