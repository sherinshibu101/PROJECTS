import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, AlertTriangle } from 'lucide-react';
import Header from '../../components/Header.js'; 

export default function Voxify() {
  const [messages, setMessages] = useState([
    {
      text: "Hi! Need help with reading? That's my specialty! I'm Voxify, and I can take the words you see and read them out loud for you. You can type or speak your questions, and I'll answer out loud too!",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [showBrowserWarning, setShowBrowserWarning] = useState(false);

  // Function to scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    // Check if speech recognition is supported
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      try {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        
        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputMessage(transcript);
          // Auto-send message after speech input if desired
          // handleSendMessage();
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
        
        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
          if (event.error === 'not-allowed') {
            addSystemMessage("I need microphone permission to listen to you. Please allow microphone access.");
          }
        };
      } catch (error) {
        console.error("Speech recognition initialization error:", error);
        setSpeechSupported(false);
      }
    } else {
      console.warn("Speech recognition not supported");
      setSpeechSupported(false);
      setShowBrowserWarning(true);
    }
    
    // Read the welcome message when component mounts
    const welcomeMessage = messages[0].text;
    speakText(welcomeMessage);
    
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.error("Error stopping speech recognition:", error);
        }
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const addSystemMessage = (text) => {
    const systemMessage = { text, isBot: true, isSystem: true };
    setMessages(prev => [...prev, systemMessage]);
  };

  // Function to handle speech synthesis
  const speakText = (text) => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower rate for better comprehension
        utterance.pitch = 1.1; // Slightly higher pitch for friendly tone
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error("Speech synthesis error:", error);
      }
    } else {
      console.log("Speech synthesis not supported in this browser");
    }
  };

  const toggleListening = () => {
    if (!speechSupported) {
      setShowBrowserWarning(true);
      return;
    }
    
    if (isListening) {
      try {
        recognitionRef.current.stop();
        setIsListening(false);
      } catch (error) {
        console.error("Error stopping speech recognition:", error);
        setIsListening(false);
      }
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
          setIsListening(true);
        } catch (error) {
          console.error('Speech recognition error:', error);
          setIsListening(false);
          
          // Check if the error is about permissions
          if (error.name === 'NotAllowedError') {
            addSystemMessage("I need microphone permission to listen to you. Please allow microphone access.");
          }
        }
      }
    }
  };

  const dismissBrowserWarning = () => {
    setShowBrowserWarning(false);
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    // Store the message for processing
    const textToProcess = inputMessage;
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Create bot response
      const botResponse = generateBotResponse(textToProcess);
      
      // Add bot response to chat
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
      
      // Read the bot response aloud
      speakBotResponse(botResponse.text);
    }, 800);
  };

  // Generate a simple bot response
  const generateBotResponse = (userInput) => {
    const userText = userInput.toLowerCase();
    
    if (userText.includes('hello') || userText.includes('hi')) {
      return { text: "Hello there! How can I help you today?", isBot: true };
    } else if (userText.includes('help')) {
      return { text: "I can read any text for you! Just type or speak what you want me to read.", isBot: true };
    } else if (userText.includes('thank')) {
      return { text: "You're very welcome! Anything else I can help with?", isBot: true };
    } else {
      return { text: `I'll read that for you: "${userInput}"`, isBot: true };
    }
  };

  // Read the bot response but skip the prefix
  const speakBotResponse = (text) => {
    if (text.includes("I'll read that for you:")) {
      const actualContent = text.split('"')[1];
      speakText(actualContent);
    } else {
      speakText(text);
    }
  };

  return (
    <div>
    <header>
        <Header />
    </header>
    <main>
    <div className="w-full min-h-screen bg-gradient-to-r from-lime-200 via-lime-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-9xl md:text-8xl text-brown-800 mb-2 text-corinthia text-brown-600 px-4 py-4">Voxify</h1>
      
      {/* Browser compatibility warning */}
      {showBrowserWarning && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded shadow-md w-full max-w-md">
          <div className="flex items-center">
            <AlertTriangle className="flex-shrink-0 mr-2" />
            <div>
              <p className="font-bold">Speech Recognition Not Supported</p>
              <p>Your browser doesn't support speech recognition. For the best experience, please use Chrome, Edge, or Safari.</p>
              <p className="mt-2">You can still use text input and hear responses.</p>
            </div>
          </div>
          <button 
            onClick={dismissBrowserWarning}
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded text-sm"
          >
            Dismiss
          </button>
        </div>
      )}
      
      <div className="w-full max-w-md bg-lime-200 border-2 border-lime-300 rounded-lg overflow-hidden">
        <div className="p-4 rounded-lg m-2">
          {/* Chat container */}
          <div className="min-h-64 max-h-96 overflow-y-auto mb-4 p-2 border-2 border-dashed border-lime-600 rounded-lg">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-2 ${message.isBot ? '' : 'flex justify-end'}`}
              >
                <div 
                  className={`p-3 rounded-lg max-w-xs inline-block ${
                    message.isBot 
                      ? message.isSystem 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-500 text-white' 
                      : 'bg-pink-500 text-white'
                  }`}
                  onClick={() => speakText(message.text)}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-2">
                <div className="bg-gray-400 text-white p-3 rounded-lg">
                  Processing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Message input */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 p-2 border border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder={isListening ? "Listening..." : "Type or click mic to speak..."}
              disabled={isLoading}
            />
            <button 
              type="button"
              onClick={toggleListening}
              className={`${isListening ? 'bg-red-500 hover:bg-red-600' : speechSupported ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400'} text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              disabled={isLoading || !speechSupported}
              title={speechSupported ? "Toggle microphone" : "Speech recognition not supported"}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            <button 
              type="submit" 
              className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              disabled={isLoading || !inputMessage.trim()}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
    </main>
    </div>
  );
}