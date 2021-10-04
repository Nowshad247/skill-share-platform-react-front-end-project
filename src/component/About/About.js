import React from 'react';
import logo from '../../asset/logo.png'
const About = () => {
    return (
        <div className='container'>
            <div className='row pt-4'>
                <div className="col-md-6 pt-4">
                    <p>About us</p>
                    <h1>We share knowledge with the world
                    </h1>
                    <p>
                        We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                    </p>
                </div>
                <div className="col-md-6 pt-4 d-flex align-items-center justify-content-center">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;