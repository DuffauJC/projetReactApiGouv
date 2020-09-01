import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap";

const navBar=(prop)=>(
    <>
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="#home">Haute-Garonne JCD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to={"/"}>
                        <Nav.Link>Accueil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to={"/localisation"}>
                        <Nav.Link>Localisation</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to={"/contact"}>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
);

export default navBar;