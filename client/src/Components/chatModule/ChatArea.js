import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { connect,  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import {io} from 'socket.io-client'
import { GetMessageApi, chatListApi, sendMessageApi } from "../../_redux/features/messageSlice";
import { chatURL } from "../../_redux/axios/axios";

const ENDPOINT = "http://localhost:4000"
var socket,chat;

function ChatArea({MessageToUser,conversation}) {

  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
 
  // const [chat_id, chat_user] = dyParams._id.split("&");
  const userData = JSON.parse(localStorage.getItem("user"));

  const [allMessages, setAllMessages] = useState([]);
  
const{MessagesList}=useSelector((state)=>state.message)

  const [loaded, setloaded] = useState(false);
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false)
  const dispatch =useDispatch()
  const sendMessage = async() => {

 await dispatch(sendMessageApi({
  content: messageContent,
  chatId: conversation?._id,
  senderId:userData?.user?._id
}))
    
  
      .then(( response ) => {
     
      dispatch(GetMessageApi(conversation._id))
      setMessageContent('')
          socket.emit("new message",response.payload)
      }); 
     
    
  };



useEffect(()=>{
socket = io(ENDPOINT)
socket.emit("setup",userData)
socket.on("connection",()=>{
  setSocketConnectionStatus(!socketConnectionStatus)
})
},[])

useEffect(() => {
  socket.on("message received", (newMessage) => {
    
    // Use the previous state to update the array correctly
    setAllMessages((prevMessages) => [...prevMessages, newMessage]);
  });

  //clean up the socket event listener when the component unmounts
  return () => {
    socket.off("message received");
  };
}, [socket]);



  useEffect(() => {
const getsms = async()=>{

   await dispatch(GetMessageApi(conversation?._id))
    
      .then(( data ) => {
        setAllMessages(data.payload);
      
        setloaded(true);
        socket.emit("join chat",conversation?._id)
       
      });
    
}
getsms()
    // scrollToBottom();
  }, [ conversation?._id, userData.token]);
  
useEffect(()=>{
  if(MessagesList){
    setAllMessages(MessagesList)
  }
},[MessagesList])


  if (!loaded) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            borderRadius: "10px",
            flexGrow: "1",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  } else {
    return (
      <div className={"chatArea-container" }>
        <div className={"chatArea-header" }>
          <p className={"con-icon" }>
            {conversation?.users[1].name[0]}
          </p>
          <div className={"header-text" }>
            <p className={"con-title" }>
              {conversation?.users[1].name}
            </p>
            {/* <p className={"con-timeStamp" }>
              {props.timeStamp}
            </p> */}
          </div>
          <IconButton className={"icon" }>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={"messages-container" }>
          {allMessages?.slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message?.sender;
              console.log("🚀 ~ ChatArea ~ sender:", sender)
              
              const self_id = userData?.user?._id;
              if (sender?._id === self_id) {
                return <MessageSelf props={message} key={index} />;
              } else {
                return <MessageOthers props={message} key={index} />;
              }
            })}
        </div>
        <div ref={messagesEndRef} className="BOTTOM" />
        <div className={"text-input-area" }>
          <input
            placeholder="Type a Message"
            className={"search-box" }
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code == "Enter") {
                // console.log(event);
                sendMessage();
                setMessageContent("");
                // setRefresh(!refresh);
              }
            }}
          />
          <IconButton
            className={"icon" }
            onClick={() => {
              sendMessage();
              // setRefresh(!refresh);
            }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ChatArea;
