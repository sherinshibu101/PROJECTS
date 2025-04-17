import { useState, useRef, useEffect } from 'react';
import { Heart, SendHorizontal, Volume2 } from 'lucide-react';
import '../index.css';
import Header from '../components/Header.js'; 
import ChatAssistant from '../pages/actualfeatures/chatassisstant.js';

export default function Help() {
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Victoria! I'm the AccessLearn chatbot. If you're feeling lost or confused about anything on this site, don't worry! I can answer your questions about accounts, services, accessibility features, and more. Think of me as your personal support assistant.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages([...newMessages, {
        text: "Thanks for your message! This is a demo response. In a real implementation, Victoria would provide helpful information based on your query.",
        sender: 'bot'
      }]);
    }, 1000);
  };

  const readMessage = (text) => {
    if (synth.speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setSpeaking(false);
    synth.speak(utterance);
    setSpeaking(true);
  };

  return (
    <div>
    <header>
        <Header/>
    </header>
    <main>
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-tr from-pink-300 via-gray-300 to-blue-300">
      <div className="relative w-full max-w-md p-6">
        {/* Main Content */}
        <div className="w-full max-w-md bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-pink-200 p-4 rounded-lg m-2">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl md:text-6xl text-brown-800 mb-2 font-script text-brown-600">Victoria</h1>
            <div className="mt-4">
              <div className="h-64 overflow-y-auto mb-4 p-2">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`px-4 py-2 rounded-lg max-w-xs break-words relative ${
                        msg.sender === 'user' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-purple-500 text-white'
                      }`}
                    >
                      {msg.text}
                      {msg.sender === 'bot' && (
                        <button 
                          onClick={() => readMessage(msg.text)}
                          className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                        >
                          <Volume2 size={16} className={speaking ? 'text-pink-500' : ''} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input form */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button 
                  type="submit"
                  className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <SendHorizontal size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>  
      </main>
      <ChatAssistant />
    </div>
  );
}