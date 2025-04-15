import React, { useState, useRef } from 'react';
import { Upload, ArrowRight, Image, Copy, Download, Volume2, VolumeX, Pause } from 'lucide-react';
import Header from '../../components/Header.js'; 
import ChatAssistant from '../actualfeatures/chatassisstant.js';

export default function ImageScribe() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const fileInputRef = useRef(null);
  const speechRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Reset states
    setError('');
    setExtractedText('');
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file.');
      return;
    }

    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    
    // Simulate text extraction
    setIsProcessing(true);
    setTimeout(() => {
      // In a real application, this would be an API call to extract text
      const sampleText = 'Sample extracted text from your image. In a real application, this would be the actual text extracted from the uploaded image using OCR technology.';
      setExtractedText(sampleText);
      setIsProcessing(false);
      
      // Auto-read the text when extraction is complete
      speakText(sampleText);
    }, 1500);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        fileInputRef.current.files = e.dataTransfer.files;
        handleImageUpload({ target: { files: [file] } });
      } else {
        setError('Please upload an image file.');
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  // Text-to-speech function
  const speakText = (text) => {
    // Stop any ongoing speech
    stopSpeaking();
    
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower rate for better comprehension
      utterance.pitch = 1.0;
      
      // Set up events to track speaking state
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      // Store reference to control later
      speechRef.current = utterance;
      
      // Start speaking
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported in this browser");
      setError("Text-to-speech is not supported in your browser.");
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleSpeaking = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else if (extractedText) {
      speakText(extractedText);
    }
  };

  // Clean up speech on unmount
  React.useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div>
     <header>
        <Header />
    </header>
    <main>
    <div className=" w-full min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-purple-300 p-6 text-center">
          <h1 className="text-9xl md:text-8xl text-brown-800 mb-2 text-corinthia text-brown-600 px-4 py-4">Image Scribe</h1>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Upload and Preview */}
          <div className="w-full md:w-1/2 p-6 border-r border-gray-200">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Upload Image</h2>
              <p className="text-gray-600 mb-4">
                Want to unlock the text hidden in pictures? I'm ImageScribe! Just show me an image, and I'll extract the 
                words for you. This way, you can easily study diagrams, charts, and scanned pages.
              </p>
            </div>
            
            <div 
              className="border-2 border-dashed border-purple-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer bg-purple-50 hover:bg-purple-100 transition-colors"
              onClick={triggerFileInput}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />
              
              {image ? (
                <div className="w-full">
                  <div className="relative mb-3 max-h-64 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt="Preview" 
                      className="w-full object-contain"
                    />
                  </div>
                  <button 
                    className="w-full bg-purple-400 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerFileInput();
                    }}
                  >
                    <Upload size={18} className="mr-2" />
                    Change Image
                  </button>
                </div>
              ) : (
                <>
                  <Image size={48} className="text-purple-500 mb-3" />
                  <p className="text-purple-600 font-medium text-center">
                    Drag and drop your image here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Supports JPG, PNG, GIF, BMP, WEBP
                  </p>
                </>
              )}
            </div>
            
            {error && (
              <div className="mt-4 text-red-500 text-center">
                {error}
              </div>
            )}
          </div>
          
          {/* Right Section - Extracted Text */}
          <div className="w-full md:w-1/2 p-6 bg-gray-50">
            <div className="mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Extracted Text</h2>
                <p className="text-gray-600">
                  The text from your image will appear here after processing.
                </p>
              </div>
              
              {extractedText && (
                <button
                  onClick={toggleSpeaking}
                  className={`${isSpeaking ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-600 hover:bg-teal-700'} text-white p-2 rounded-full h-10 w-10 flex items-center justify-center`}
                  aria-label={isSpeaking ? "Stop speaking" : "Read aloud"}
                  title={isSpeaking ? "Stop speaking" : "Read aloud"}
                >
                  {isSpeaking ? <Pause size={18} /> : <Volume2 size={18} />}
                </button>
              )}
            </div>
            
            <div className="relative min-h-64">
              {isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                    <p className="text-teal-600">Processing your image...</p>
                  </div>
                </div>
              ) : (
                <div>
                  {extractedText ? (
                    <div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm min-h-48 max-h-96 overflow-y-auto">
                        <p className="whitespace-pre-wrap">{extractedText}</p>
                      </div>
                      
                      <div className="flex mt-4 space-x-3">
                        <button 
                          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
                          onClick={copyToClipboard}
                        >
                          <Copy size={18} className="mr-2" />
                          Copy to Clipboard
                        </button>
                        
                        <button 
                          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
                        >
                          <Download size={18} className="mr-2" />
                          Download as TXT
                        </button>
                      </div>
                      
                      {/* Speech indicator */}
                      {isSpeaking && (
                        <div className="mt-4 p-2 bg-teal-100 text-teal-800 rounded-lg flex items-center justify-center">
                          <div className="flex space-x-1 items-center">
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-150"></div>
                          </div>
                          <span className="ml-2">Reading text aloud...</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg bg-white">
                      <div className="flex items-center mb-3">
                        <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
                        <ArrowRight size={20} className="mx-2 text-gray-400" />
                        <div className="w-16 h-8 bg-pink-500 rounded-lg"></div>
                      </div>
                      <p className="text-gray-500 text-center">
                        Upload an image to see extracted text here
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <ChatAssistant/>
    </div>
  );
}