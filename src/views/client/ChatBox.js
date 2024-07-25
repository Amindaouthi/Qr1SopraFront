import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'me' ? 'me' : 'them'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tapez votre message..."
        />
        <button onClick={handleMessageSend}>Envoyer</button>
      </div>
    </div>
  );
};

export default ChatBox;
