import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';
import './CSS/SplitNavbar.css'

function SplitNavbar() {
    const { theme } = useContext(ThemeContext);
    const [activekey, setActiveKey] = useState("/change-user")
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SplitNavbarBGClass = `${theme}-split-navbar`;
    const SplitNavbarClass = `${theme} split-navbar`;

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClose();
    };
    return (
        <><Navbar className={`split-navbar-body ${SplitNavbarBGClass} ${SplitNavbarClass}`} >
            <Nav.Link 
                eventKey="/change-user" 
                className="Nav-Element lastElement" 
                active={activekey === "/change-user"} 
                onSelect={setActiveKey} 
                onClick={handleShow}
            >
                <i className='bi bi-person-circle'></i> Admin
            </Nav.Link>
        </Navbar><Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Login </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label> Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
                            <Form.Text className='text-muted'> We'll never share your email with anyone else. </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant='primary' type='submit'> Submit </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='Secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal></>
    );
}

export default SplitNavbar;
