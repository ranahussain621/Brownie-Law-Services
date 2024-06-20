import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const IsLogedIn = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
      // debugger
    
      
      
   
    }, [navigate])

  return (
    <div>
        <Component/>
    </div>
  )
}

export default IsLogedIn