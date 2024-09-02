import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [listening, setListening] = useState(false);
  const messagesEndRef = useRef(null); // Ref for scrolling to bottom
  const navigate = useNavigate(); // Define navigate

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        const finalTranscript = event.results[i][0].transcript;
        setMessages((prevMessages) => [...prevMessages, { text: finalTranscript, sender: 'user' }]);
        setMessage('');
        sendMessageToBackend(finalTranscript);
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    setMessage(interimTranscript);
  };

  const handleListen = () => {
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  };

  const sendMessageToBackend = async (userMessage) => {
    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      sendMessageToBackend(message);
      setMessage('');
    }
  };

  useEffect(() => {
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // Scroll whenever messages state changes

  const handleVideo = () => {
    navigate('/video');
  };

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-gray-50"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2979775.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white h-full w-full rounded-lg shadow-lg overflow-hidden flex flex-col relative bg-opacity-50">
        <div className="relative bg-[#48B4BB] p-4">
          <h1 className="text-center text-3xl font-bold">Consult here by saying your issues</h1>
        </div>
        <div className="relative flex-grow p-6 flex flex-col space-y-4">
          <div className="flex justify-between">
            <div className="bg-[#48B4BB] p-4 rounded-lg">
              <p className="text-lg font-medium">Tell us about the symptoms and causes</p>
            </div>
          </div>
          <div className="flex-grow p-4 rounded-lg overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-gray-200' : 'bg-gray-300'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
          </div>
          <div className="flex justify-between">
            <div className="bg-[#48B4BB] p-4 rounded-lg">
              <p className="text-lg font-medium">Do you need prescription/ Direct Doctor Consultation </p>
              <div className="flex space-x-4 mt-2">
                <button className="bg-gray-200 px-4 py-2 rounded-lg">Prescription</button>
                <button onClick={handleVideo} className="bg-gray-200 px-4 py-2 rounded-lg">Consultation</button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#48B4BB] p-4 flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 rounded-lg border border-gray-300"
            placeholder="Type / say your message here"
          />
          <button onClick={handleListen} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
            <FaMicrophone className={`text-xl ${listening ? 'text-red-500' : 'text-white'}`} />
          </button>
          <button onClick={handleSend} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
