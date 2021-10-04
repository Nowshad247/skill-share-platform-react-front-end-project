import React from 'react';
import './Categories.css';
import { useHistory } from "react-router-dom";

import { FaConnectdevelop, FaBuysellads, FaDocker, FaLaravel, FaReact, FaPython, FaHubspot, FaGithub } from 'react-icons/fa';
const Categories = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/services");
    }
    return (
        <div className='container'>
            <div>
                <div className='conatiner d-flex justify-content-center'>
                    <div className='col-md-6 '>
                        <button type="button" onClick={handleClick} className='btn btn-primary'>
                            <h1>
                                Explore Cources
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="cources-head">
                    <h1>
                        Explore Featured
                        <span>
                            Categories
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    <div className='cat-card'>
                        <FaConnectdevelop size='4em' color='#03B97C' />
                        <h4>Development</h4>
                    </div>
                    <div className='cat-card'>
                        <FaBuysellads size='4em' color='#03B97C' />
                        <h4>Accounting</h4>
                    </div>
                    <div className='cat-card'>
                        <FaDocker size='4em' color='#03B97C' />
                        <h4>Docker</h4>
                    </div>
                    <div className='cat-card'>
                        <FaLaravel size='4em' color='#03B97C' />
                        <h4>Laravel</h4>
                    </div>
                    <div className='cat-card'>
                        <FaReact size='4em' color='#03B97C' />
                        <h4>React</h4>
                    </div>
                    <div className='cat-card'>
                        <FaPython size='4em' color='#03B97C' />
                        <h4>Python</h4>
                    </div>
                    <div className='cat-card'>
                        <FaHubspot size='4em' color='#03B97C' />
                        <h4>Hubspot</h4>
                    </div>
                    <div className='cat-card'>
                        <FaGithub size='4em' color='#03B97C' />
                        <h4>GitHub</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Categories;