import React from "react";
import "./myStyles.css";

function MessageOthers({ props }) {
 
  // console.log("message others : ", props);


  
  const timestamp = props?.createdAt;
const date = new Date(timestamp);

const hours = date.getHours();
const minutes = date.getMinutes();
  return (
    <div className={"other-message-container" }>
      <div className={"conversation-container" }>
        <p className={"con-icon" }>
          {props?.sender?.name[0]}
        </p>
        <div className={"other-text-content" }>
          <p className={"con-title" }>
            {props?.sender?.name}
          </p>
          <p className={"con-lastMessage" }>
            {props?.content}
          </p>
          <p className="self-timeStamp">{hours}:{minutes}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
