import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './component/Nav';
import Home from "./component/Home";
import Work from "./component/Work";
import Project from "./component/Project";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Nav/>
    <Home/>
    <Work/>
    <Project/>
  </div>
  
);
