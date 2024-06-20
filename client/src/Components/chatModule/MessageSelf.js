import React from "react";

function MessageSelf({ props }) {


  const timestamp = props?.createdAt;
const date = new Date(timestamp);

const hours = date.getHours();
const minutes = date.getMinutes();


  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.content}</p>
        <p className="self-timeStamp" style={{ color: "black" }}>
          {hours}:{minutes}
        </p>
      </div>
    </div>
  );
}

export default MessageSelf;
