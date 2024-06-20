import React, {  useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {io} from 'socket.io-client'
import {  chatListApi } from "../../_redux/features/messageSlice";
import './myStyles.css'





var socket;
function Sidebar({setscreenCount,sendchatId}) {

  const ENDPOINT = "http://localhost:4000"
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    socket = io(ENDPOINT)
    socket.emit("setup",userData)
    socket.on("connection",()=>{
    
    })
    },[])
  const [conversations, setConversations] = useState([]);

  
  const userData = JSON.parse(localStorage.getItem("user"));
  
  
  const {chatList,isLoading}  = useSelector((state)=>state.message)

  const [searchTerm, setSearchTerm] = useState("");

 

  const user = userData.user;
   const getData = async () =>{
      await dispatch(chatListApi({id:userData?.user?._id}))
    }
  useEffect(() => { 
    getData()
  }, []);
  useEffect(()=>{
if(chatList){
  
setConversations(chatList)
 
}

  },[chatList])


  useEffect(() => {
    socket.on("message received", (newMessage) => {
      
      // Initialize a flag to check if the user is valid
      let userIsValid = false;
  
      conversations?.forEach((conversation) => {
        const validUser = conversation?.users?.find((item) => item._id === newMessage?.sender._id);
        console.log("🚀 ~ file: Sidebar.js:68 ~ conversations?.forEach ~ validUser:", validUser)
       
      });
  
      // Check if userIsValid is true, and then make the API call
      if (!userIsValid) {
        dispatch(chatListApi({ id: userData?.user?._id }));
      }
    });
  
    // Don't forget to clean up the socket event listener when the component unmounts
    return () => {
      socket.off("message received");
    };
  }, [socket]);
  
  //uplift the id of chat into chatArea component
const conversationid=(conversation) => {
  sendchatId(conversation)
}
  
const filteredConversations = conversations.filter((conversation) => {
  const validUser = conversation?.users?.find((item) => item._id !== user?._id);
  return validUser && validUser.name.toLowerCase().includes(searchTerm.toLowerCase());
});



  return (
    <div className="sidebar-container">
      <div className={"sb-header" }>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              setscreenCount('welcome')
            }}
          >
            <AccountCircleIcon
              className={"icon" }
            />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("/lawyers");
            }}
          >
            <PersonAddIcon className={"icon" } />
          </IconButton>
     

        
        </div>
      </div>
      <div className={"sb-search" }>
        <IconButton className={"icon" }>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" }
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={"sb-conversations" }>
        {isLoading? <p>Loading..</p>:
        filteredConversations?.length === 0 ? <h2 className="d-flex justify-content-center p-5">No Data</h2>:
        filteredConversations?.map((conversation, index) => {
          const validUser = conversation?.users?.find(item => item._id !== user?._id);

          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          if (conversation.latestMessage === undefined) {
          
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  style={{cursor:'pointer'}}
                  onClick={() => {
                    setscreenCount('messages')
                    conversationid(conversation)
                  }}
                >
                  <p className={"con-icon" }>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={"con-title" }>
                    {conversation.users[1].name}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>
                  {/* <p className={"con-timeStamp" }>
                {conversation.timeStamp}
              </p> */}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                style={{cursor:'pointer'}}
                onClick={() => {
                  setscreenCount('messages')
                  conversationid(conversation)
                }}
              >
                <p className={"con-icon" }>
                  {validUser.name[0]}
                </p>
               
                <p className="con-title">
      {validUser ? validUser.name:'no name'}
    </p>
               

                <p className="con-lastMessage">
                  {conversation?.latestMessage?.content}
                </p>
                {/* <p className={"con-timeStamp" }>
                {conversation.timeStamp}
              </p> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;
