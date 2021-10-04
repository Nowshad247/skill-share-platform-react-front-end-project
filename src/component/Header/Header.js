import React from 'react';
import logo from '../../logo.png';
import './Header.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/home'>
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className="mb-2 input" >
                                <FormControl id="inlineFormInputGroup" placeholder="Search Skill" />
                                <InputGroup.Text><BsSearch /></InputGroup.Text>
                            </InputGroup>

                        </Nav>
                        <Nav>
                            <Nav.Link to="/home">
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#35C695"
                                    }}
                                >
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link to="/about">
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#35C695"
                                    }}
                                >
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link to="/services">
                                <NavLink
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#35C695"
                                    }}
                                >
                                    Services
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link to="/contact-us">
                                <NavLink
                                    to="/contact-us"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#35C695"
                                    }}
                                >
                                    Contact us
                                </NavLink>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;