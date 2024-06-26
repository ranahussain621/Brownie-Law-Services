import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import {store} from './_redux/store/store'
import App from './App';
import 'react-toastify/dist/ReactToastify.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>  
    </React.StrictMode>
    
  
 
);


