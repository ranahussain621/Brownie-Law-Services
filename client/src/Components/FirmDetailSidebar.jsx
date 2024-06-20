
import React,{useState} from 'react'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import "../Styles/sidebar.css"
import OurMission from '../Pages/firmsDetail/OurMission';
import TeamList from '../Pages/firmsDetail/TeamList';
import Services from '../Pages/firmsDetail/Services';
import CaseHistory from '../Pages/firmsDetail/CaseHistory';
import News from '../Pages/firmsDetail/News';


export default function FirmDetailSidebar() {
  



    const [sidebarVisible, setSidebarVisible] = useState(false);

    function handleSidebarClick() {
      setSidebarVisible(!sidebarVisible);
    }


  return (
    <>


      <div >
      
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >

   
          <Row className='m-0 mt-3 mb-3' style={{minHeight:'750px'}}> 
       
           <Col sm={3} className={`sidebar-area shadow-end  ${sidebarVisible ? 'active' : ''}`} style={{paddingTop:'30px'}}>
                <button type="button" onClick={handleSidebarClick} className='text-start sideBar-icon bg-transparent border-0'>
                      <FontAwesomeIcon icon={faList} />
                </button>
                <div>
                  <h1
                  className='h1 fw-bold poppins-600'
                  >Criminal Defense</h1>
                  <hr />
                </div>
                
              <Nav variant="pills" className="flex-column">
                {/* side menu titles */} 


                <Nav.Item className='frim-nav-item'>
                  <Nav.Link className='fs-6 d-flex firm-nav-link' style={{ margin: '0.2rem' }} eventKey="first">
             
                
                    <p className='text-middle mt-2 h5 fw-bold  poppins-500'>Our Mission</p> </Nav.Link>
                </Nav.Item>

                <Nav.Item className='frim-nav-item'>
                  <Nav.Link className='fs-6 d-flex firm-nav-link' style={{ margin: '0.2rem' }} eventKey="second">
             
                    <p className='text-middle mt-2  h5 fw-bold  poppins-500'>Team</p>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='frim-nav-item'>
                  <Nav.Link className='fs-6 d-flex firm-nav-link' style={{ margin: '0.2rem' }} eventKey="third">
        
                    <p className='text-middle mt-2 h5 fw-bold  poppins-500'>Services</p>
                  </Nav.Link>
                </Nav.Item>

             

                <Nav.Item className='frim-nav-item'>
                  <Nav.Link className='fs-6 d-flex firm-nav-link' style={{ margin: '0.2rem' }} eventKey="fourth">
                 
                    <p className='text-middle mt-2  h5 fw-bold  poppins-500'>case Histories</p>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='frim-nav-item'>
                  <Nav.Link className='fs-6 d-flex firm-nav-link' style={{ margin: '0.2rem' }} eventKey="fifth">
                 
                    <p className='text-middle mt-2  h5 fw-bold  poppins-500'>News</p>
                  </Nav.Link>
                </Nav.Item>


            

                   


              </Nav>
            </Col>
          <Col sm={9} className='sidebar-screens 'style={{backgroundColor:'#F8F8F8',paddingTop:'30px'}}>
          
              
          <Tab.Content  >


            <Tab.Pane style={{ color: "black" }} eventKey="first">
        <OurMission/>
            </Tab.Pane>
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="second">
           
           <TeamList/>
            </Tab.Pane>

            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="third">
         
              <Services/>
            </Tab.Pane>
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="fourth">
            <CaseHistory/>
            
          </Tab.Pane>


      
          
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="fifth">
              
               <News/>
           
              </Tab.Pane>
        





          </Tab.Content>
        </Col>
          
           
          </Row>
        </Tab.Container>
      </div>





    </>
  )
}

























