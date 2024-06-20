import { Routes, Navigate, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Protected from './auth/Protected';
import Auth from './auth/Auth';
import IsLogedIn from './auth/IsLoggedIn';
import DashboardRoutes from './routers/dashboardRoutes';
import { ActiveItemProvider } from './ActiveItemContext';

function App() {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
         <ActiveItemProvider>
        <Routes>
       
            <Route path="/dashboard/*" element={<Protected  Component = {DashboardRoutes} />} />
            <Route path="/*" element={<IsLogedIn Component = {Auth} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
    
        </Routes>
              </ActiveItemProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
