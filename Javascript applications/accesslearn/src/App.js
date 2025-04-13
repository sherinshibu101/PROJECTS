import './App.css';
import React from 'react';
import Header from '../src/components/Header.js'

export default function App() {
  return (
    <main className="bg-pink-200 min-h-screen flex items-center justify-center"> 
      <Header />
      <section className="container flex flex-col mx-auto md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="bg-pink-50 rounded-3xl p-6 shadow-lg max-w-md mx-auto">
            <div className="aspect-square relative">
              <img 
                src="/path-to-your-character-image.png" 
                alt="Cartoon girl with education items" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
      </div>
      <div className="w-full md:w-1/2 p-4 mr-auto">
          <div className="max-w-md mb-8">
            <h1 className="text-4xl md:text-6xl font-script text-brown-600">
              Bridging the gap <br/>
              between<br/>
              Education
            </h1>
          </div>
          <div className="relative">
            {/* Decorative leaf element */}
            <div className="absolute right-0 -top-16">
              {/* You'd add your leaf SVG or image here */}
            </div>
            
            <button
              onClick={() => (window.location.href = '/your-target-page.html')}
              className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-faculty">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>  );
}