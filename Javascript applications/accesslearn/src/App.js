import './App.css';
import React from 'react';
import Header from '../src/components/Header.js'; 
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHandHoldingHeart , faMicrophone } from '@fortawesome/free-solid-svg-icons';
import frontpageImage from '../src/assets /frontpage.jpg';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main className="min-h-screen flex-grow">
        <section className="container flex flex-col mx-auto md:flex-row items-center justify-between h-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-pink-50 rounded-3xl p-6 shadow-lg max-w-md mx-auto">
              <div className="aspect-square relative">
                <img
                  src={frontpageImage}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 mr-auto">
            <div className="max-w-md mb-8">
              <h1 className="text-4xl md:text-6xl font-script text-brown-600">
                Bridging the gap <br />
                between<br />
                Education
              </h1>
            </div>
            <div className="relative">
              {/* Decorative leaf element */}
              <div className="absolute right-0 -top-16">
                {/* You'd add your leaf SVG or image here */}
              </div>

              <button
                onClick={() => (window.location.href = '/services')}
                className="bg-pink-600 hover:bg-pink-800 text-white py-3 px-6 rounded-lg text-lg font-faculty"
              >
                Get Started !
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className="below-main-container services-gradient px-32 py-32">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-7xl md:text-6xl text-brown-800 mb-2 font-script text-brown-600">Services We Provide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto font-script">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="service-icon-container">
                <FontAwesomeIcon icon={faCommentDots} className="service-icon text-brown-700" />
              </div>
            </div>
            <h3 className="text-5xl font-medium text-brown-700 text-corinthia">StudyBuddy</h3>
            <p className="text-brown-600 text-simonetta text-xl">-24/7 Assistance</p>
          </div>
          <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="service-icon-container">
          <FontAwesomeIcon icon={faMicrophone} className="service-icon text-brown-700" />
        </div>
      </div>
      <h3 className="text-5xl font-medium text-brown-700 text-corinthia">Voxify</h3>
      <p className="text-brown-600 text-simonetta text-xl">-Audio to Text</p>
      </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="service-icon-container">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="service-icon text-brown-700" />
              </div>
            </div>
            <h3 className="text-5xl font-medium text-brown-700 text-corinthia">ImageScribe</h3>
            <p className="text-brown-600 text-simonetta text-xl">-Image to Text</p>
          </div>
        </div>
        </div>
      </div>
      <div className="below-main-container-with-bg px-32 py-32">
        <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-7xl md:text-6xl font-light text-white mb-6 leading-relaxed text-corinthia">
          You deserve a learning experience that sees beyond limitations.
        </h1>
        <p className="text-2xl font-light text-white text-simonetta leading-relaxed">
          Our mission is to open the full spectrum of educational opportunities, from foundational 
          skills to advanced knowledge, so you can achieve your academic goals with confidence 
          and realize your boundless potential.
        </p>
      </div>
    </div>
    </div>
    <div className="below-main-container-part2 px-32 py-32">
  <div className="container mx-auto px-4">
    <h1 className="text-7xl text-center md:text-6xl font-light text-white mb-6 leading-relaxed text-corinthia">FAQs</h1>
    <div className="faqs-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> {/* Apply grid here */}
      {/* FAQ Item 1 */}
      <div className="faq-item">
        <h2 className="faq-question text-4xl font-medium text-white text-corinthia">What is AccessLearn?</h2>
        <p className="faq-answer text-xl font-light text-white text-simonetta leading-relaxed">
          AccessLearn is a website which aims to help visually impaired and blind individuals. It aims to provide inclusive learning for everyone so that no one feels left behind.
        </p>
      </div>

      {/* FAQ Item 2 */}
      <div className="faq-item">
        <h2 className="faq-question text-4xl font-medium text-white text-corinthia">Who is AccessLearn for?</h2>
        <p className="faq-answer text-xl font-light text-white text-simonetta leading-relaxed">
          As of now it mainly focuses on providing a tutor for visually impaired and blind school children. I do hope that I will be able to expand and add more services in the future.
        </p>
      </div>
      {/* FAQ Item 3 */}
      <div className="faq-item">
        <h2 className="faq-question text-4xl font-medium text-white text-corinthia">How much does AccessLearn cost?</h2>
        <p className="faq-answer text-xl font-light text-white text-simonetta leading-relaxed">
          It's free of cost. I want everyone to be able to learn irrespective of their financial backgrounds and have an accessible tutor.
        </p>
      </div>
    </div>
   </div>
   </div>
   <div className="below-main-container services-gradient px-32 py-32">
        <div className="container mx-auto px-4"></div>
    </div>
    </div>
  );
}