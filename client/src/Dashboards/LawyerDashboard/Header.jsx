import React from 'react'
import {BsJustify} from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
  
        <div className='menu-icon' style={{padding:'10px 20px'}}>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
   
  )
}

export default Header