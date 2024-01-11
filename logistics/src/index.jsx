//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import App from './App';

//ReactDOM.render(
//    <React.StrictMode>
//        <Router>
//            <App />
//        </Router>
//    </React.StrictMode>,
//    document.getElementById('root')
//);



import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import App from './App.jsx'; 

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

