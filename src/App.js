import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './CSS/App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./ThemeContext.js";
import { ThemeContext } from './ThemeContext';
import Charts from './Charts';
import SideNavigationBar from './sidebar';
import Navigationbar from './Navbar';
import SplitNavbar from './SplitNavbar';
import User from './Users.js';



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
        <div className='row'>
          <div className='col-12 pt-3 navbar-row'>
            <SplitNavbar />
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
