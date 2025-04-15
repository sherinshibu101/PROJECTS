import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import Header from '../../components/Header.js'; 
import ChatAssistant from '../actualfeatures/chatassisstant.js';

export default function StudyBuddy() {
    const [messages, setMessages] = useState([
      {
        text: "Hi, I'm StudyBuddy! I'll be helping u with your doubts. Ask me anything related to the subject and I'll explain it as simple as I can",
        isBot: true
      }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
  
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e) => {
      e.preventDefault();
      
      if (!inputMessage.trim()) return;
      
      // Add user message to chat
      const userMessage = { text: inputMessage, isBot: false };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsLoading(true);
      
      try {
        // Call the chat controller function
        // In a real implementation, you'd use the imported getChatResponse function
        // For now we're simulating the response
        
        // Replace this simulation with actual API call in production:
        // const response = await getChatResponse(inputMessage);
        
        // Simulation of response delay
        setTimeout(() => {
          const botResponse = { 
            text: "This is a simulated response. In the actual implementation, this would be replaced with the response from your OpenAI integration.",
            isBot: true 
          };
          setMessages(prev => [...prev, botResponse]);
          setIsLoading(false);
        }, 1000);
        
        /* Uncomment and use this in actual implementation
        const response = await getChatResponse(inputMessage);
        const botResponse = { text: response, isBot: true };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
        */
        
      } catch (error) {
        console.error("Error getting chat response:", error);
        const errorMessage = { 
          text: "Sorry, I couldn't process your request. Please try again.",
          isBot: true 
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsLoading(false);
      }
    };
    
    return (
      <div>
      <header>
            <Header />
      </header>
      <main>
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-200 via-blue-100 to-yellow-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-9xl md:text-8xl text-brown-800 mb-2 text-corinthia text-brown-600 px-4 py-4">StudyBuddy</h1>
        <div className="w-full max-w-md bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-pink-200 p-4 rounded-lg m-2">
            {/* Chat container */}
            <div className="min-h-64 max-h-96 overflow-y-auto mb-4 p-2 border-2 border-dashed border-gray-400 rounded-lg">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-2 ${message.isBot ? '' : 'flex justify-end'}`}
                >
                  <div className={`p-3 rounded-lg max-w-xs inline-block ${
                    message.isBot ? 'bg-blue-400 text-white' : 'bg-pink-400 text-white'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-2">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    Thinking...
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
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Ask your question..."
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                disabled={isLoading}
              >
                <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          </main>
          <ChatAssistant />
          </div>
        );
    }