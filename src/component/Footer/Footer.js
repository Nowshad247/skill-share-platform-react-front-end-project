import React from 'react';
import './Footer.css'
import logo from '../../asset/logo.png'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='container'>
            <div className="row p-4 footer" >
                <div className='col-md-8 col-xl-8 align-self-center text-light'>
                    <h3>Do you Have questions?</h3>
                    <p>We'll help you to grow your career and growth.
                    </p>
                </div>
                <div className='col-md-4 col-xl-4 text-center align-self-center'>
                    <div>
                        <button className="button-contact">Contact Us</button>
                    </div>
                </div>

            </div>
            <div className='row row-footer-bg p-4 ' >
                <div className='col-md-4 col-sm-4 col-xl-4 '>
                    <h3>COMPANY</h3>
                    <img className="logo mt-4 " src={logo} alt="Logo" />
                    <h4 className='mt-4 text-justify'>Create an online video course, reach students across the globe, and earn money
                    </h4>
                </div>
                <div className='col-md-4 col-sm-4 col-xl-4  text-center'>
                    <h3>ALL SECTIONS</h3>
                    <div className='company-footer'>
                        <NavLink to='/'>Section</NavLink>
                        <NavLink to='/'>Section</NavLink>
                        <NavLink to='/'>Section</NavLink>
                        <NavLink to='/'>Section</NavLink>
                    </div>


                </div>
                <div className='col-md-4 col-sm-4 col-xl-4  text-center'> <h3>COMPANY</h3>
                    <div className='text-light company-footer'>
                        <NavLink
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#35C695"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#35C695"
                            }}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#35C695"
                            }}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact-us"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#35C695"
                            }}
                        >
                            contact us
                        </NavLink>

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='text-center row-footer-bg'>
                    <hr />
                    <p>CopyRight @Nowshad</p>

                </div>
            </div>
        </div >
    );
};

export default Footer;