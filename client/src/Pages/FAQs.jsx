import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faCreditCard, } from "@fortawesome/free-regular-svg-icons";
import { faBan, faTruckFast, faDollarSign, faTag } from "@fortawesome/free-solid-svg-icons";
import { Typography } from '@mui/material';
import MainNews from './Home/MainNews';
import './faq.css'


export default function FAQs() {

    const list = [
        {
            icon: <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "How do I change my account email?",
            description: `You can log in to
             your account and change it
              from your Profile > Edit Profile. Then
             go to the general tab
              to change your email.`,
        },
        {
            icon: <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "What should I do if my payment fails?",
            description: `You can log in to
             your account and change it
              from your Profile > Edit Profile. Then
             go to the general tab
              to change your email.`,
        }
        ,
        {
            icon: <FontAwesomeIcon icon={faBan} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "What is your cancellation policy?",
            description: `You can log in to
             your account and change it
              from your Profile > Edit Profile. Then
             go to the general tab
              to change your email.`,
        }
        ,
        {
            icon: <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "How do I check order delivery status ?",
            description: `You can log in to
            your account and change it
             from your Profile > Edit Profile. Then
            go to the general tab
             to change your email.`,
        }
        ,
        {
            icon: <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "What is Instant Refunds?",
            description: `You can log in to
             your account and change it
              from your Profile > Edit Profile. Then
             go to the general tab
              to change your email.`,
        }
        ,
        {
            icon: <FontAwesomeIcon icon={faTag} style={{ fontSize: "32px", color: '#FE9C69' }} />,
            title: "How do I apply a coupon on my order?",
            description: `You can log in to
             your account and change it
              from your Profile > Edit Profile. Then
             go to the general tab
              to change your email.`,
        }


    ]

    const [searchQuery, setSearchQuery] = useState('');
   

    // Filter the FAQ list based on the search query
    const filteredList = list.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <div
                className="d-flex h-100 justify-content-center align-items-center mt-5"
                style={{
                    backgroundColor: '#EFEDE0',
                    minHeight: '400px',
                    borderRadius: '25px'
                    
                }}>

                <div className='text-main-faq mx-5 ' >
                    <p className='poppins-700 d-flex justify-content-center' >FAQs</p>
                    <p className='poppins-800 fw-bold h1 mt-3 text-main-faq' >Ask us anything</p>
                    <p className='poppins-500 text-dar mt-4' style={{fontSize:'24px'}}>Have any questions? We're here to assist you.</p>

                    <div className="container">

                        <div className="row justify-content-center">


                            <div className="input-group mt-4" >
                                <input className="form-control p-3 text-dark poppins-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{outline:'none'}}
                                type="search" placeholder='Search' id="example-search-input" />

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="container" style={{ width:"100%" }}>
                <div className="row">
                    {
                        filteredList?.length > 0 ?
                    filteredList?.map((item, i) => {

                        return (

                            <>
                                <div className="col-md-4" key={i}>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <div className='my-4 '>
                                                <p className='p-2' style={{
                                                    backgroundColor: "#FFE6D9",
                                                    borderRadius: '10px',
                                                    width: "auto",
                                                    display: 'inline-block'
                                                }}>
                                                    {item.icon}
                                                </p>

                                            </div>
                                            <p className='poppins-700 mt-3' style={{fontSize:'30px'}}>{item.title}</p>
                                            <p className='poppins-500 my-3' style={{fontSize:'18px',textAlign:'justify'}}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    : <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center' style={{textTransform:'capitalize',fontSize:'18px'}}>We will provide shortly</h2>
                    }


                </div>
            </div>
            <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            lg: "50px",
          },
          textAlign: "center",
          fontWeight: "600",
          mb: {
            xs: "30px",
            lg: "60px",
          },
          fontFamily:'poppins,sans-serif'
        }}
      >
        News & Events
      </Typography>   
<MainNews />

        </>
    )
}
