import React from 'react';
import Header from '../components/Header.js';
import ChatAssistant from '../pages/actualfeatures/chatassisstant.js';
export default function Features() {
    return(
        <div>
        <header>
            <Header />
        </header>
        <main className="relative w-full min-h-screen services-gradient flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
        <h1 className="text-9xl md:text-8xl mb-6 leading-relaxed text-corinthia text-amber-900 text-center">Unlock Your Learning Potential</h1>
        <div className="w-full max-w-lg relative flex flex-col items-stretch"> {/* Changed to flex-col and items-stretch */}
        {/* Tool Item - StudyBuddy */}
        <div className="w-full relative mb-4">
           <a href='/studybuddy' target="_blank" rel="noopener noreferrer" className="block border-2 border-amber-900 py-6 px-4 relative hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-900"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-900"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-900"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-900"></div>
                <h2 className="text-2xl text-simonetta leading-relaxed text-amber-800 text-center">StudyBuddy</h2>
            </a>
        </div>
        {/* Tool Item - Voxify */}
        <div className="w-full relative mb-4">
            <a href="/voxify" target="_blank" rel="noopener noreferrer" className="block border-2 border-amber-900 py-6 px-4 relative hover:shadow-md transition-shadow">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-900"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-900"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-900"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-900"></div>
                <h2 className="text-2xl text-simonetta leading-relaxed text-amber-800 text-center">Voxify</h2>
            </a>
        </div>

        {/* Tool Item - ImageScribe */}
        <div className="w-full relative">
            <a href="/imagescribe" target="_blank" rel="noopener noreferrer" className="block border-2 border-amber-900 py-6 px-4 relative hover:shadow-md transition-shadow">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-900"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-900"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-900"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-900"></div>
                <h2 className="text-2xl text-simonetta leading-relaxed text-amber-800 text-center">ImageScribe</h2>
            </a>
        </div>
        </div>
        </main>
        <ChatAssistant />
        </div>
    );
}