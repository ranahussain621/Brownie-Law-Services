import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './lawTabs.css';
import CivilandCommercial from './CivilandCommercial';
import PublicLaw from './PublicLaw';
import CriminalLaw from './Criminal';
import Matrimonial from './Matrimonial';
import WillandProbate from './WillandProbate';

function LawTabs() {
  return (
    <div className="container">
      <div className="row mx-md-3 mx-1">
      
          <Tabs
            defaultActiveKey="Civil / Commercial"
            id="fill-tab-example"
            className="mb-3 rounded-5 border-0 fw-bold p-3 tabs-law d-flex flex-column flex-md-row"
            fill
            style={{ background: '#EAEAEA' }}
          >
            <Tab
            className=''
            style={{textAlign:'left'}}
              eventKey="Civil / Commercial"
              title={<span className="text-dark d-flex justify-content-left justify-content-md-center" style={{ fontSize: '24px' }}>Civil / Commercial</span>}
            >
              <CivilandCommercial />
            </Tab>
            <Tab
              eventKey="Public Law"
              title={<span className="text-dark d-flex justify-content-left justify-content-md-center" style={{ fontSize: '24px' }}>Public Law</span>}
            >
              <PublicLaw />
            </Tab>
            <Tab
              eventKey="Criminal"
              title={<span className="text-dark d-flex justify-content-left justify-content-md-center" style={{ fontSize: '24px' }}>Criminal</span>}
            >
              <CriminalLaw />
            </Tab>
            <Tab
              eventKey="Matrimonial"
              title={<span className="text-dark d-flex justify-content-left justify-content-md-center" style={{ fontSize: '24px' }}>Matrimonial</span>}
            >
              <Matrimonial />
            </Tab>
            <Tab
              eventKey="Will &amp; Probate"
              title={<span className="text-dark d-flex justify-content-left justify-content-md-center" style={{ fontSize: '24px' }}>Will &amp; Probate</span>}
            >
              <WillandProbate />
            </Tab>
          </Tabs>
      
      </div>
    </div>
  );
}

export default LawTabs;
