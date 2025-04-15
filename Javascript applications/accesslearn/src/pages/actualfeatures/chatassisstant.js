// ChatAssistant.jsx
import React, { useState } from "react";
import { MessageCircle, X, ChevronUp, Send } from "lucide-react";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", sender: "assistant" }
  ]);
  const [inputText, setInputText] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    // Add user message
    const updatedMessages = [
      ...messages,
      { text: inputText, sender: "user" }
    ];
    setMessages(updatedMessages);
    setInputText("");

    // Simulate assistant response (you would connect to your actual chat service here)
    setTimeout(() => {
      setMessages([
        ...updatedMessages,
        { text: "Thanks for your message! I'll help you with that.", sender: "assistant" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg mb-4 w-80 max-h-96 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-purple-600 p-3 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-72">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div 
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user" 
                      ? "bg-purple-100 text-purple-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button 
              type="submit"
              className="bg-purple-600 text-white rounded-r-lg px-4 py-2 hover:bg-purple-700"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
      
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-300"
      >
        {isOpen ? (
          <ChevronUp size={24} className="text-purple-600" />
        ) : (
          <div className="relative">
            <div className="bg-yellow-300 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
                {/* Smiley face */}
                <div className="text-black text-lg">😊</div>
              </div>
            </div>
            {/* Flower petals */}
            <div className="absolute -top-1 -left-1 bg-white w-3 h-3 rounded-full border border-yellow-300"></div>
            <div className="absolute -top-1 -right-1 bg-white w-3 h-3 rounded-full border border-yellow-300"></div>
            <div className="absolute -bottom-1 -left-1 bg-white w-3 h-3 rounded-full border border-yellow-300"></div>
            <div className="absolute -bottom-1 -right-1 bg-white w-3 h-3 rounded-full border border-yellow-300"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;