import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './components/body/registration/registration';
import Body from './components/body/body';

document.title = 'To-Do List';


<BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}>
        <Route path="/Body" component={Body} />
        </Route>
      </Routes>
    </BrowserRouter>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);
reportWebVitals();
