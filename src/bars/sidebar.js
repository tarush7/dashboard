import React, { useContext, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

import '../CSS/Sidebar.css';

function Sidebar() {

    const { theme } = useContext(ThemeContext);
    const sidebarBGClass = `${theme}-sidebar`;
    const sidebarClass = `${theme} sidebar`;

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const sidebarBody = document.querySelector('.sidebar-body');
        const navContainer = document.querySelector('.nav-container');
        sidebarBody.classList.toggle('open');
        navContainer.classList.toggle('nav-container-shrinked');
    };

    return (
        <div className={`col-auto d-flex flex-column sidebar-body ${sidebarBGClass} ${sidebarClass}`}>
            <div className="nav-container">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Link to="/" className="nav-link Nav-Element">
                        <i className='bi bi-speedometer2'></i> Dashboard
                    </Link>
                    <Link to="/users" className="nav-link Nav-Element">
                        <i className='bi bi-people'></i> Users
                    </Link>
                    <Link to="/report" className="nav-link Nav-Element">
                        <i className='bi bi-file-earmark-bar-graph'></i> Report
                    </Link>
                    <Link to="/notice" className="nav-link Nav-Element">
                        <i className='bi bi-bell'></i> Notice
                    </Link>
                    <Link to="/settings" className="nav-link Nav-Element">
                        <i className='bi bi-gear'></i> Settings
                    </Link>
                    <Link to="/test" className="nav-link Nav-Element">
                        <i className='bi bi-file-earmark-bar-graph'></i> Test
                    </Link>
                </Nav>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <i className='bi bi-list'></i>
            </div>
            {isOpen && (
                <div className="nav-container-shrinked">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Link to="/" className="nav-link Nav-Element">
                            <i className='bi bi-speedometer2'></i> Dashboard
                        </Link>
                        <Link to="/users" className="nav-link Nav-Element">
                            <i className='bi bi-people'></i> Users
                        </Link>
                        <Link to="/report" className="nav-link Nav-Element">
                            <i className='bi bi-file-earmark-bar-graph'></i> Report
                        </Link>
                        <Link to="/notice" className="nav-link Nav-Element">
                            <i className='bi bi-bell'></i> Notice
                        </Link>
                        <Link to="/settings" className="nav-link Nav-Element">
                            <i className='bi bi-gear'></i> Settings
                        </Link>
                        <Link to="/test" className="nav-link Nav-Element">
                            <i className='bi bi-file-earmark-bar-graph'></i> Test
                        </Link>
                    </Nav>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
