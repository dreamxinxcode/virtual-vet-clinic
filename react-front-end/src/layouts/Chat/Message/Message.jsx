import React from "react";

import "./Message.scss";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  const myName = localStorage.getItem("userName");
  if (user === myName) {
    isSentByCurrentUser = true;
  }
  let date = new Date(Date.now()).toLocaleTimeString();
  let time = date.toString();

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="message-box message-box-send">
        <p className="sentText message-label-to">{myName}</p>
        <div className="message-messageBox">
          <p className="message-text message-text-send">
            {ReactEmoji.emojify(text)}
          </p>
          <span className="message-time-send">{time}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="message-box">
        <p className="sentText message-label-from ">{user}</p>
        <div className="message-messageBox">
          <p className="message-text">{ReactEmoji.emojify(text)}</p>
          <span className="message-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
