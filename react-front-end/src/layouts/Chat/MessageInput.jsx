import React from "react";

import "./MessageInput.css";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className="formMsg">
    <input
      className="inputMsg"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
<<<<<<< HEAD
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
=======
    <button className="sendButton" onClick={e => sendMessage(e)}>
      <svg
        id="Capa_1"
        enable-background="new 0 0 465.882 465.882"
        height="512"
        viewBox="0 0 465.882 465.882"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z" />
      </svg>
>>>>>>> c7294097edf68f0f340ca04e21c1f0d37bd0e91b
    </button>
  </form>
);

export default MessageInput;
