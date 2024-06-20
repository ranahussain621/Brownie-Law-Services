import React from 'react'
 import {Routes,Route} from 'react-router-dom'
import FirmDashboard from '../Components/FirmDashboard/Dashboard'
 import ClientDashboard from '../Dashboards/ClientDashboard/Dashboard'
import LawyerDashboard from '../Dashboards/LawyerDashboard/Dashboard'
import SuperAdminDashboard from '../Dashboards/SuperAdmin/Dashboard'


const DashboardRoutes = () => {
  return (
    <div>
     <Routes>
    <Route path="/Firm/*" element={<FirmDashboard />} />
    <Route path="/Client/*" element={<ClientDashboard />} />
    <Route path="/Lawyer/*" element={<LawyerDashboard />} />
    <Route path="/Admin/*" element={<SuperAdminDashboard />} />

    </Routes> 

  
    
    </div>
  )
}

export default DashboardRoutes