import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import ChatArea from './ChatArea'

const ChatScreen = ({MessageToUser}) => {
    const [screenCount, setscreenCount] = useState('welcome')
    const [conversation, setConversation] = useState()
    const passChatId=(data)=>{
        setConversation(data)
    }

  return (
<>
<div className="mx-5 mt-4">
<div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            Chat
        </div>

    <div className="row mt-md-5">
        <div className="col-md-4 col-sm-12">
         
            <Sidebar  setscreenCount={setscreenCount} sendchatId={passChatId}/>
        </div>
        <div className="col-md-8 col-sm-12  ">  
         {screenCount==='welcome'?
             <Welcome/>
             :
             screenCount==='messages'?
             <ChatArea MessageToUser={MessageToUser} conversation={conversation}/>
             :''
        }
           
        </div>
    </div>

</div>

</>
  )
}

export default ChatScreen