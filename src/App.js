import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './CSS/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./ThemeContext.js";
import { ThemeContext } from './ThemeContext';
import Charts from './pages/Charts.js';
import SideNavigationBar from './bars/sidebar.js';
import Navigationbar from './bars/Navbar.js';
import SplitNavbar from './bars/SplitNavbar.js';
import User from './pages/Users.js';



function App() {

  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>

  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  const cardBGClass = `${theme}-charts`;
  const mainBGClass = `${theme}-mainBG`;

  return (
    <Router>
      <div className={`w-100 h-100 pb-3 ${mainBGClass}`}>
        <div className='header-row pt-3'>
          <div className='col-auto split-navbar-row'>
            <SplitNavbar />
          </div>
          <div className='navbar-row'>  
            <Navigationbar />
          </div>
        </div>
        <div className='col-auto'>
          <SideNavigationBar />
        </div>



        <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/" element={<div className={`col-auto charts ${cardBGClass}`}> <Charts /></div>} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
