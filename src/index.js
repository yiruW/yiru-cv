import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route} from "react-router-dom";
import './styles.css';

import Nav from './component/Nav';
import Home from "./component/Home";
import Work from "./component/Work";
import Project from "./component/Project";
import Contact from "./component/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Home/>
    <Work/>
    <Project/>
    <Contact/>
  </BrowserRouter>
);