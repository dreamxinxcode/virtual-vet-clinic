import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.scss";

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import TextContainer from "./TextContainer";

const ENDPOINT = "http://localhost:8080";

let socket;

// DUMMY MESSAGES
const messagess = ["Hello world", "Nice to meet you"];
const location = `/chat?name=AAA&room=myRoom`;
const name = "TTT";
const room = "myRoom";
// const users = {};

const Chat = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name)

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  // }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });

    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  }, []);

  // SEND MESSAGE
  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="chatContainer">
      <InfoBar room={room} />
      <h1 className="chatHeader"> Welcome to chat! {response}</h1>
      <Messages messages={messages} name={"TIMA"} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
