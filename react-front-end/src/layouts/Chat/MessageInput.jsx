import React from "react";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className="chat-formMsg">
    <input
      className="chat-msgSend"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <button className="chat-sendButton" onClick={e => sendMessage(e)}>
      <svg
        className="chat-btnSend"
        id="Capa_1"
        enable-background="new 0 0 465.882 465.882"
        height="512"
        viewBox="0 0 465.882 465.882"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z" />
      </svg>
    </button>
  </form>
);

export default MessageInput;
