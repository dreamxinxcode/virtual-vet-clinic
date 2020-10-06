import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import Chat from "../Chat/Chat";
import Controls from './Controls';
import axios from 'axios';

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
  const [yourName, setYourName] = useState('');
  const [yourID, setYourID] = useState("");
  const [names, setNames] = useState({});
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

    axios.get('users/me')
    .then((res) => {
      if (res.data.user.name) {
        console.log('Must be a clinic:', res.data.user.name);
        setYourName(res.data.user.name);
      } else if (res.data.first_name) {
        console.log('must be a patient')
        setYourName(`${res.data.user.first_name} ${res.data.user.last_name}`)
      } else {
        console.log('error: no name was found')
      }
    });

    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })

    socket.current.on("allUsers", (users) => {
      for (let user in users) {
        if (user === yourID) {
          setUsers({...yourID[yourName]})
        } else {
          setUsers(user)
        }
      }
      setUsers(users);
      console.log('users object:', users)
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
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
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video id='user-video' playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video id='partner-video' playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <svg id='incoming-call' onClick={acceptCall} height="512" viewBox="0 0 58 58" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="004---Receiving-Call" fill="rgb(0,255,0)" fill-rule="nonzero" transform="translate(-1)"><path id="Shape" d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z"/><path id="Shape" d="m42 23v3.943c-.0000682.382831-.2186946.732025-.5630446.8993051-.3443501.1672801-.7539821.1232845-1.0549554-.1133051l-11.382-8.943c-.2410506-.1895978-.3817735-.4793198-.3817735-.786s.1407229-.5964022.3817735-.786l11.382-8.943c.3009733-.23658957.7106053-.28058517 1.0549554-.1133051.34435.16728006.5629764.5164741.5630446.8993051v3.953c-.0000462.5472475.4397987.9928858.987 1 4.321.055 13.823.758 15.691 9.682.0781952.411611-.1084914.8283291-.4676984 1.0439873s-.8147691.1845287-1.1413016-.0779873c-1.597-1.304-4.385-2.658-9.069-2.658h-5c-.5522847 0-1 .4477153-1 1z"/></g></g></svg>
      </div>
    )
  }
  return (
    <div id='video-container'>
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
            <button onClick={() => callPeer(key)}>Call {users[key]}</button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
        <Controls />
      </Row>
    </div>
  );
}

export default VideoCall;
