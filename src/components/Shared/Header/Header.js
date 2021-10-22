import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">SoftCopy</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#text-colors">Text Colors</Nav.Link>
                <Nav.Link as={HashLink} to="/home#background-colors">Background Colors</Nav.Link>
                <Nav.Link as={HashLink} to="/home#gradient-background">Gradient Background</Nav.Link>
                <Nav.Link as={HashLink} to="/home#gradient-text">Gradient Text</Nav.Link>
                <Navbar.Text>
                    {/* Signed in as: <a href="#login">Afride</a> */}
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;