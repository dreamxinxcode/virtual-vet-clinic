import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import Chat from "../Chat/Chat";
import Controls from "./Controls";
import axios from "axios";

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

const VideoCall = () => {
  const [yourName, setYourName] = useState("");
  const [yourID, setYourID] = useState("");
  const [accType, setAccType] = useState('');
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
    axios.get("users/me").then((res) => {
      const type = res.data.type;
      if (type === 'clinic') {
        setAccType('clinic');
      } else {
        setAccType('pet');
      }
    });

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
      for (let user in users) {
        if (user === yourID) {
          setUsers({ ...yourID[yourName] });
        } else {
          setUsers(user);
        }
      }
      setUsers(users);
      console.log("users object:", users);
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
        // iceServers: [
        //   {
        //     urls: "stun:numb.viagenie.ca",
        //     username: "sultan1640@gmail.com",
        //     credential: "98376683",
        //   },
        //   {
        //     urls: "turn:numb.viagenie.ca",
        //     username: "sultan1640@gmail.com",
        //     credential: "98376683",
        //   },
        // ],
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" },
          { urls: "stun:stun3.l.google.com:19302" },
          { urls: "stun:stun4.l.google.com:19302" },
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

  function acceptCall() {
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
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video id="user-video" playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video id="partner-video" playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <svg
          id="incoming-call"
          onClick={acceptCall}
          height="512"
          viewBox="0 0 58 58"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Page-1" fill="#fff" fill-rule="evenodd">
            <g
              id="004---Receiving-Call"
              fill="rgb(0,255,0)"
              fill-rule="nonzero"
              transform="translate(-1)"
            >
              <path
                id="Shape"
                d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z"
              />
              <path
                id="Shape"
                d="m42 23v3.943c-.0000682.382831-.2186946.732025-.5630446.8993051-.3443501.1672801-.7539821.1232845-1.0549554-.1133051l-11.382-8.943c-.2410506-.1895978-.3817735-.4793198-.3817735-.786s.1407229-.5964022.3817735-.786l11.382-8.943c.3009733-.23658957.7106053-.28058517 1.0549554-.1133051.34435.16728006.5629764.5164741.5630446.8993051v3.953c-.0000462.5472475.4397987.9928858.987 1 4.321.055 13.823.758 15.691 9.682.0781952.411611-.1084914.8283291-.4676984 1.0439873s-.8147691.1845287-1.1413016-.0779873c-1.597-1.304-4.385-2.658-9.069-2.658h-5c-.5522847 0-1 .4477153-1 1z"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
  return (
    <div id="video-container">
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
      {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button onClick={() => callPeer(key)}>Call</button>


            //  <svg id='call' onClick={() => callPeer(key)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            //    viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
            // <path style={{fill:'#25AE88'}} d="M256,0C114.617,0,0,114.617,0,256c0,52.03,15.563,100.414,42.231,140.818L0,512l119.128-39.706
            //   C158.72,497.399,205.639,512,256,512c141.383,0,256-114.617,256-256S397.383,0,256,0z"/>
            // <path style={{fill:'#FFFFFF'}} d="M397.233,335.078V377.6c0.062,15.66-12.606,28.398-28.292,28.469c-0.892,0-1.783-0.035-2.675-0.115
            //   c-43.705-4.74-85.689-19.641-122.571-43.52c-34.313-21.76-63.409-50.803-85.222-85.054c-24.002-36.979-38.938-79.086-43.599-122.898
            //   c-1.412-15.59,10.108-29.378,25.732-30.791c0.847-0.062,1.686-0.106,2.534-0.106h42.611c14.257-0.141,26.412,10.293,28.407,24.382
            //   c1.801,13.612,5.138,26.968,9.94,39.83c3.902,10.364,1.404,22.042-6.391,29.908l-18.035,17.999
            //   c20.215,35.487,49.664,64.874,85.221,85.054l18.035-17.999c7.883-7.786,19.588-10.275,29.97-6.382
            //   c12.888,4.802,26.271,8.13,39.91,9.922C387.09,308.312,397.594,320.689,397.233,335.078z"/>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // <g>
            // </g>
            // </svg>            
          );
        })}
      </Row>
      <Row>
        {incomingCall}
        <Controls />
      </Row>
    </div>
  );
};

export default VideoCall;
