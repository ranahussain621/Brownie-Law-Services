import React from "react";
import logo from "../../assets/images/live-chat_512px.png";
import { motion } from "framer-motion";

function Welcome() {
  const userData = JSON.parse(localStorage.getItem("user"));


  return (
    <div className="welcome-container" >
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData?.user[0]?.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;
