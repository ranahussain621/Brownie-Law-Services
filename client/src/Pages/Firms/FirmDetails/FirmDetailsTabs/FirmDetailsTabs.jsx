import React from "react";


import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import './tabs.css'
import OurMission from "../OurMission";
import TeamList from "../TeamList";
import Services from "../Services";
import CaseHistory from "../CaseHistory";
import News from "../News";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";



export default function FirmDetailsTabs({firmData,outsiderFirmId}) {
  

  return (
    <>
   
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="container p-5">
          <Row className="m-0  p-4 pb-0 mt-0 pt-0" style={{ minHeight: "750px" }}>
            <Col sm={12} md={2}  className={`sidebar-area pt-0 px-0`}      >
              {/* <button
                type="button"
         
                className="text-start sideBar-icon bg-transparent border-0"
              >
                <FontAwesomeIcon icon={faList} />
              </button> */}

              <Nav variant="pills" className="flex-column">
              
                 <Nav.Item className="add ">
                  <Nav.Link
                    className="fs-6 d-flex p-0 bg-0 add"
                    style={{ margin: "0.2rem" }}
                    eventKey="first"
                  >
                    <p className="text-dark mt-2 p-0 ps-3 fw-semibold" style={{fontFamily:'poppins'}}>Our Mission</p>{" "}
                  </Nav.Link>
                </Nav.Item> 


                {
                    outsiderFirmId === 'outsiderFirmId' ? 
               <Nav.Item className="add">
                  <Nav.Link
                    className="fs-6 d-flex p-0 add "
                    style={{ margin: "0.2rem",fontFamily:'poppins' }}
                    eventKey="second"
                  >
                    <p className="text-dark mt-2 p-0 ps-3 fw-semibold">Team</p>
                  </Nav.Link>
                </Nav.Item> : ''
                  }
                

                <Nav.Item className="add">
                  <Nav.Link
                    className="fs-6 d-flex p-0 add"
                    style={{ margin: "0.2rem",width:'156px' }}
                    eventKey="third"
                  >
                    <p className="text-dark fw-semibold mt-2  p-0 ps-3" style={{fontFamily:'poppins'}}>Services</p>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="add">
                  <Nav.Link
                    className="fs-6 d-flex p-0 add "
                    style={{ margin: "0.2rem" ,width:'190px'}}
                    eventKey="fourth"
                  >
                    <p className="text-dark mt-2  p-0 ps-3 fw-semibold">
                      Case Histories
                    </p>
                  </Nav.Link>
                </Nav.Item>
     
                <Nav.Item className="add">
                  <Nav.Link
                    className="fs-6 d-flex p-0 add"
                    style={{ margin: "0.2rem" ,width:'190px'}}
                    eventKey="fifth"
                  >
                    <p className="text-dark mt-2  p-0 ps-3 fw-semibold add-par">
                      News
                    </p>
                  </Nav.Link>
                </Nav.Item>
            
              </Nav>
            </Col>
            <Col md={9} sm={12} className="sidebar-screens mt-5 mt-md-0 ms-md-5 "  >
              <Tab.Content className="ms-md-5">
                <Tab.Pane
                  
                  eventKey="first"
                >
                <OurMission />
                </Tab.Pane>

                {
            
            outsiderFirmId === 'outsiderFirmId' ? 
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="second" >
               <TeamList firmData={firmData} outsiderFirmId={outsiderFirmId}/> 
                </Tab.Pane> : ''
                }
              

                <Tab.Pane
                  style={{ color: "black", border: "none" }}
                  eventKey="third"
                >
                  <Services firmData={firmData}/>
                </Tab.Pane>
                <Tab.Pane
                  style={{ color: "black", border: "none" }}
                  eventKey="fourth"
                >
                <CaseHistory firmData={firmData}/>
                </Tab.Pane>

                <Tab.Pane
                  style={{ color: "black", border: "none" }}
                  eventKey="fifth"
                >
                 <News data={firmData?._id}/> 
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
  
    </>
  );
}
