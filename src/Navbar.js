import React, { useState, useContext} from 'react';
import './CSS/NavigationBar.css'
import { ThemeContext } from './ThemeContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Navigationbar() {
    const { theme } = useContext(ThemeContext);

    const NavigationBarBGClass = `${theme}-navigation-bar`;
    const NavigationBarClass = `${theme} navigation-bar`;
    const NavigationBarBrandClass = `${theme} Navbar-Brand`;

    const [selectedFile, setSelectedFile] = useState(null);
    const { toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        // Upload the file to the server here
        console.log(selectedFile);
    };

    const handleToggle = (isOpen, { source }) => {
        if (source === 'select') {
            setIsOpen(true);
        } else {
            setIsOpen(isOpen);
        }
    };

    

    return (
        <Navbar expand={false} className={`bg-body-tertiary navigation-bar-body ${NavigationBarBGClass} ${NavigationBarClass}`}>
            <Container fluid>
                <Navbar.Brand href="#" className={NavigationBarBrandClass}>Navbar Offcanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Offcanvas     
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2" onClick={() => document.getElementById('fileUpload').click()}>Upload File</Nav.Link>
                            <input id="fileUpload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                            <NavDropdown
                                title="Themes"
                                id="offcanvasNavbarDropdown"
                                show={isOpen}
                                onToggle={handleToggle}
                            >
                                <NavDropdown.Item href="#action3" onClick={() => toggleTheme('light')}>Light Mode</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={() => toggleTheme('dark')}>
                                    Dark Mode
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" onClick={() => toggleTheme('default')}>
                                    Default Mode
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;