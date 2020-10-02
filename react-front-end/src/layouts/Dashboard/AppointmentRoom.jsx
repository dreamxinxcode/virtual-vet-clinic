import React, { useEffect, useState, useRef } from "react";
import "./AppointmentRoom.scss";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import Chat from "../Chat/Chat";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  width: auto;
  height: auto;
`;

function AppointmentRoom() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: "stun:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683",
          },
          {
            urls: "turn:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683",
          },
        ],
      },
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  const acceptCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.current.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  };

  let UserVideo;
  if (stream) {
    console.log("User video has been rendered");
    UserVideo = (
      <Video id="user-video" playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    console.log("Partner viseo has been rendered");
    PartnerVideo = (
      <Video id="partner-video" playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}><svg version="1.1" id="answer-call-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#1FBF1F' x="0px" y="0px"
	 viewBox="0 0 384 384" xmlSpace="preserve">
<g>
	<g>
		<path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
			c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
			c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
			C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
			/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></button>
      </div>
    );
  }
  return (
    <div id="video-container">
      {UserVideo}

      {PartnerVideo}

      <button id='hangup-button' onClick={() => window.location.href = "/dashboard" }>
            <svg
              version="1.1"
              id="hangup-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 497.88 497.88"
              xmlSpace="preserve"
            >
              <path
                fill='#F44336'
                d="M491.59,237.036c-70.08-53.44-153.984-81.696-242.656-81.696S76.358,183.596,6.278,237.036
	c-3.36,2.56-5.6,6.368-6.144,10.592s0.576,8.48,3.136,11.84l58.56,76.768c2.592,3.392,6.368,5.6,10.592,6.144
	c4.224,0.608,8.48-0.576,11.84-3.136c24.704-18.912,52.288-33.344,81.92-42.912c8.384-2.72,12.992-11.712,10.304-20.128
	l-19.648-61.088c59.552-15.168,124.608-15.2,184.192,0l-19.648,61.088c-2.72,8.416,1.92,17.408,10.304,20.128
	c29.6,9.568,57.152,24,81.92,42.912c2.816,2.112,6.208,3.296,9.728,3.296c0.704,0,1.408-0.064,2.112-0.16
	c4.224-0.576,8.032-2.752,10.592-6.112l58.56-76.8c2.56-3.36,3.712-7.648,3.136-11.84C497.19,243.404,494.95,239.596,491.59,237.036
	z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>{" "}
          </button>


      {Object.keys(users).map((key) => {
        if (key === yourID) {
          return null;
        }
        return (
          <button id='hangup-button' onClick={() => callPeer(key)}>
            <svg
              version="1.1"
              id="hangup-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 497.88 497.88"
              xmlSpace="preserve"
            >
              <path
                fill='#F44336'
                d="M491.59,237.036c-70.08-53.44-153.984-81.696-242.656-81.696S76.358,183.596,6.278,237.036
	c-3.36,2.56-5.6,6.368-6.144,10.592s0.576,8.48,3.136,11.84l58.56,76.768c2.592,3.392,6.368,5.6,10.592,6.144
	c4.224,0.608,8.48-0.576,11.84-3.136c24.704-18.912,52.288-33.344,81.92-42.912c8.384-2.72,12.992-11.712,10.304-20.128
	l-19.648-61.088c59.552-15.168,124.608-15.2,184.192,0l-19.648,61.088c-2.72,8.416,1.92,17.408,10.304,20.128
	c29.6,9.568,57.152,24,81.92,42.912c2.816,2.112,6.208,3.296,9.728,3.296c0.704,0,1.408-0.064,2.112-0.16
	c4.224-0.576,8.032-2.752,10.592-6.112l58.56-76.8c2.56-3.36,3.712-7.648,3.136-11.84C497.19,243.404,494.95,239.596,491.59,237.036
	z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>{" "}
            {key}
          </button>
        );
      })}

      {incomingCall}
    </div>
  );
}

export default AppointmentRoom;
