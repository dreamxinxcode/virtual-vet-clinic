import React from "react";

import "./Message.scss";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const myName = localStorage.getItem("userName");
  if (user === myName) {
    isSentByCurrentUser = true;
  }
  let date = new Date(Date.now()).toLocaleTimeString();
  let time = date.toString();

  return isSentByCurrentUser ? (
    <div className="message-container message-container-right justifyEnd">
      <div className="message-box message-box-right">
        <p className="sentText message-label-right">{myName}</p>
        <div className="message-messageBox">
          <p className="message-text message-text-right">
            {ReactEmoji.emojify(text)}
          </p>
          <span className="message-time-right">{time}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="message-container justifyStart">
      <div className="message-box">
        <p className="sentText message-label-left ">{user}</p>
        <div className="message-messageBox">
          <p className="message-text">{ReactEmoji.emojify(text)}</p>
          <span className="message-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
